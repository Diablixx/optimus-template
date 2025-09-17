'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function OptimusDashboard() {
  // Keyword state (replaces prompt)
  const [keyword, setKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Article editor state
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [articleKeyword, setArticleKeyword] = useState('');

  // Publishing state
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [publishStatus, setPublishStatus] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const createSlug = (title: string): string => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const calculateReadTime = (content: string): string => {
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  };

  const handleGenerateArticle = async () => {
    if (!keyword.trim()) {
      setPublishStatus({
        type: 'error',
        message: 'Veuillez saisir un mot-clé pour générer l\'article.'
      });
      return;
    }

    // Check if keyword already exists in Supabase
    try {
      const { data: existingArticle, error: checkError } = await supabase
        .from('articles')
        .select('id, title')
        .eq('keyword', keyword.trim())
        .single();

      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 means no rows found
        throw checkError;
      }

      if (existingArticle) {
        setPublishStatus({
          type: 'error',
          message: `Un article avec le mot-clé "${keyword.trim()}" existe déjà (ID: ${existingArticle.id}). Veuillez choisir un autre mot-clé.`
        });
        return;
      }
    } catch (error) {
      console.error('Error checking keyword uniqueness:', error);
      setPublishStatus({
        type: 'error',
        message: 'Erreur lors de la vérification de l\'unicité du mot-clé.'
      });
      return;
    }

    setIsGenerating(true);
    setPublishStatus({
      type: 'info',
      message: 'Envoi du mot-clé à N8N pour génération et sauvegarde dans Supabase...'
    });

    try {
      // Get N8N Cloud webhook URL from environment variables
      const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

      if (!n8nWebhookUrl) {
        throw new Error('N8N_WEBHOOK_URL not configured. Please check your .env.local file.');
      }

      // Send keyword to N8N Cloud webhook for AI article generation and Supabase save
      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Optimus-SaaS/1.0',
        },
        body: JSON.stringify({
          prompt: keyword.trim()
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`N8N Cloud webhook error (${response.status}): ${errorText}`);
      }

      const result = await response.json();
      console.log('N8N Response:', result); // Debug log

      if (result.success) {
        setPublishStatus({
          type: 'info',
          message: `Mot-clé envoyé avec succès ! Attente de 15 secondes pour la génération et sauvegarde...`
        });

        // Wait 15 seconds for N8N to generate and save the article
        setTimeout(async () => {
          try {
            // Search for the article by keyword in Supabase
            const { data: generatedArticle, error: searchError } = await supabase
              .from('articles')
              .select('*')
              .eq('keyword', keyword.trim())
              .single();

            if (searchError || !generatedArticle) {
              throw new Error('Article non trouvé dans Supabase après génération');
            }

            // Auto-populate the title and content boxes
            setArticleTitle(generatedArticle.title);
            setArticleContent(generatedArticle.content);
            setArticleKeyword(generatedArticle.keyword);

            setPublishStatus({
              type: 'success',
              message: `Article récupéré avec succès ! Titre: "${generatedArticle.title}". Vous pouvez maintenant l'éditer et le republier si nécessaire.`
            });

            // Clear the keyword input
            setKeyword('');

          } catch (error) {
            console.error('Error retrieving generated article:', error);
            setPublishStatus({
              type: 'error',
              message: `Erreur lors de la récupération de l'article généré: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
            });
          }
        }, 15000);

      } else {
        throw new Error(result.error || 'Erreur inconnue lors de l\'envoi du mot-clé');
      }

    } catch (error: unknown) {
      console.error('N8N Cloud Generation Error:', error);

      let errorMessage = 'Erreur lors de l\'envoi du mot-clé.';

      if (error instanceof Error) {
        if (error.message.includes('fetch') || error.message.includes('Network') || error.message.includes('Failed to fetch')) {
          errorMessage = 'Impossible de contacter N8N Cloud. Vérifiez votre connexion internet et l\'URL du webhook.';
        } else if (error.message.includes('not configured')) {
          errorMessage = 'Configuration N8N manquante. Veuillez configurer N8N_WEBHOOK_URL dans .env.local.';
        } else if (error.message.includes('404')) {
          errorMessage = 'Webhook N8N introuvable. Vérifiez que le workflow est activé et que l\'URL est correcte.';
        } else if (error.message.includes('500')) {
          errorMessage = 'Erreur serveur N8N. Vérifiez la configuration OpenAI API dans N8N.';
        } else {
          errorMessage = `Erreur N8N: ${error.message}`;
        }
      }

      setPublishStatus({
        type: 'error',
        message: errorMessage
      });
      setIsGenerating(false);
    }
  };

  const handleSaveDraft = async () => {
    if (!articleTitle.trim() || !articleContent.trim()) {
      setPublishStatus({
        type: 'error',
        message: 'Veuillez remplir le titre et le contenu de l\'article.'
      });
      return;
    }

    setIsSavingDraft(true);
    setPublishStatus({ type: null, message: '' });

    try {
      const slug = createSlug(articleTitle);
      const excerpt = articleContent.substring(0, 200) + '...';
      const readTime = calculateReadTime(articleContent);

      const { data, error } = await supabase
        .from('articles')
        .insert([
          {
            title: articleTitle,
            content: articleContent,
            slug: slug,
            excerpt: excerpt,
            read_time: readTime,
            published: false,
            meta_description: excerpt,
            keyword: articleKeyword.trim() || null
          }
        ])
        .select()
        .single();

      if (error) throw error;

      setPublishStatus({
        type: 'success',
        message: `Brouillon sauvegardé avec succès ! ID: ${data.id}`
      });
      
      setArticleTitle('');
      setArticleContent('');
      setArticleKeyword('');
    } catch (error: unknown) {
      setPublishStatus({
        type: 'error',
        message: `Erreur lors de la sauvegarde: ${error instanceof Error ? error.message : 'Erreur inconnue'}`
      });
    }

    setIsSavingDraft(false);
  };

  const handlePublishArticle = async () => {
    if (!articleTitle.trim() || !articleContent.trim()) {
      setPublishStatus({
        type: 'error',
        message: 'Veuillez remplir le titre et le contenu de l\'article.'
      });
      return;
    }

    setIsPublishing(true);
    setPublishStatus({ type: null, message: '' });

    try {
      // Use the new N8N publication workflow
      const n8nPublishUrl = process.env.NEXT_PUBLIC_N8N_PUBLISH_WEBHOOK_URL;

      if (!n8nPublishUrl) {
        throw new Error('N8N_PUBLISH_WEBHOOK_URL not configured. Please check your .env.local file.');
      }

      // Send article data to N8N for publication workflow
      const response = await fetch(n8nPublishUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Optimus-SaaS/1.0',
        },
        body: JSON.stringify({
          title: articleTitle.trim(),
          content: articleContent.trim(),
          keyword: articleKeyword.trim() || null,
          slug: createSlug(articleTitle),
          excerpt: articleContent.substring(0, 200) + '...',
          readTime: calculateReadTime(articleContent),
          metaDescription: articleContent.substring(0, 200) + '...',
          author: 'Optimus SaaS',
          category: 'Marketing'
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`N8N Publication webhook error (${response.status}): ${errorText}`);
      }

      const result = await response.json();
      console.log('N8N Publication Response:', result); // Debug log

      if (result.success) {
        setPublishStatus({
          type: 'success',
          message: `Article publié avec succès via N8N ! ${result.message || 'Publication terminée avec succès.'}`
        });

        // Clear the form
        setArticleTitle('');
        setArticleContent('');
        setArticleKeyword('');
      } else {
        throw new Error(result.error || 'Erreur inconnue lors de la publication');
      }
    } catch (error: unknown) {
      console.error('N8N Publication Error:', error);

      let errorMessage = 'Erreur lors de la publication de l\'article.';

      if (error instanceof Error) {
        if (error.message.includes('fetch') || error.message.includes('Network') || error.message.includes('Failed to fetch')) {
          errorMessage = 'Impossible de contacter N8N pour la publication. Vérifiez votre connexion internet.';
        } else if (error.message.includes('not configured')) {
          errorMessage = 'Configuration N8N publication manquante. Veuillez configurer N8N_PUBLISH_WEBHOOK_URL dans .env.local.';
        } else if (error.message.includes('404')) {
          errorMessage = 'Webhook N8N publication introuvable. Vérifiez que le workflow de publication est activé.';
        } else if (error.message.includes('500')) {
          errorMessage = 'Erreur serveur N8N lors de la publication.';
        } else {
          errorMessage = `Erreur N8N Publication: ${error.message}`;
        }
      }

      setPublishStatus({
        type: 'error',
        message: errorMessage
      });
    }

    setIsPublishing(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">Optimus SaaS</span>
          </div>

          <nav className="space-y-2">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Workflow de contenu
              </h3>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    const keywordSection = document.getElementById('keyword-section');
                    keywordSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors"
                >
                  🔑 1. Générer l\'article
                  <div className="text-xs text-indigo-500 mt-1">Mot-clé → N8N → Supabase</div>
                </button>

                <button
                  onClick={() => {
                    const editorSection = document.getElementById('editor-section');
                    editorSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  ✏️ 2. Éditer l\'article
                  <div className="text-xs text-gray-500 mt-1">Titre & contenu</div>
                </button>

                <button
                  onClick={() => {
                    const publishSection = document.getElementById('publish-section');
                    publishSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
                >
                  🚀 3. Mettre en ligne
                  <div className="text-xs text-green-500 mt-1">Publier sur le site</div>
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs text-gray-400 mb-2">Prochainement</div>
              <div className="space-y-1">
                <div className="text-sm text-gray-400">📊 Analytics</div>
                <div className="text-sm text-gray-400">📧 Email automation</div>
                <div className="text-sm text-gray-400">🔗 Réseaux sociaux</div>
                <div className="text-sm text-gray-400">💰 Paiements</div>
                <div className="text-sm text-gray-400">🎓 Formation</div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Tableau de bord Optimus
              </h1>
              <p className="text-gray-600">
                Gérez votre contenu et publiez des articles sur votre site web.
              </p>
            </div>

            {/* Status Messages */}
            {publishStatus.type && (
              <div className={`mb-6 p-4 rounded-md ${
                publishStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : publishStatus.type === 'error'
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}>
                {publishStatus.message}
                {publishStatus.type === 'success' && publishStatus.message.includes('publié') && (
                  <div className="mt-2">
                    <a
                      href="http://localhost:3001/articles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline hover:no-underline"
                    >
                      → Voir tous les articles
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Section 1: Keyword Input */}
            <div id="keyword-section" className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">🔑</span>
                1. Générer l\'article par mot-clé
              </h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="keyword-input" className="block text-sm font-medium text-gray-700 mb-2">
                    Mot-clé unique pour générer l\'article *
                  </label>
                  <input
                    type="text"
                    id="keyword-input"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Ex: marketing-digital-2024, seo-local, ecommerce-tendances..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Le mot-clé doit être unique. N8N générera l\'article et le sauvegardera automatiquement dans Supabase.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Nouveau workflow: Mot-clé → N8N → Supabase → Récupération (15s)
                  </div>

                  <button
                    onClick={handleGenerateArticle}
                    disabled={isGenerating || !keyword.trim()}
                    className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                      isGenerating || !keyword.trim()
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 transform hover:scale-105'
                    }`}
                  >
                    {isGenerating ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Génération...
                      </span>
                    ) : (
                      '🔑 Générer avec mot-clé'
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Section 2: Article Editor */}
            <div id="editor-section" className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">✏️</span>
                2. Éditer l\'article
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Titre de l\'article *
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={articleTitle}
                    onChange={(e) => setArticleTitle(e.target.value)}
                    placeholder="Le titre sera généré automatiquement ou saisissez le vôtre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                  />
                </div>

                <div>
                  <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-2">
                    Mot-clé (optionnel)
                  </label>
                  <input
                    type="text"
                    id="keyword"
                    value={articleKeyword}
                    onChange={(e) => setArticleKeyword(e.target.value)}
                    placeholder="Ex: marketing digital, SEO, e-commerce..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Mot-clé unique pour identifier cet article dans le nouveau workflow
                  </p>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                    Contenu de l\'article *
                  </label>
                  <textarea
                    id="content"
                    value={articleContent}
                    onChange={(e) => setArticleContent(e.target.value)}
                    rows={12}
                    placeholder="Le contenu sera généré automatiquement ou rédigez directement ici"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-black"
                  />
                </div>

                <div className="text-sm text-gray-500">
                  {articleTitle.trim() && articleContent.trim() ? (
                    <span className="text-green-600">✓ Article prêt pour la publication</span>
                  ) : (
                    'Générez un article ou saisissez le contenu manuellement'
                  )}
                </div>
              </div>
            </div>

            {/* Section 3: Publishing */}
            <div id="publish-section" className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="mr-2">🚀</span>
                3. Mettre en ligne
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">Aperçu de la publication</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div><strong>Titre:</strong> {articleTitle || 'Non défini'}</div>
                    <div><strong>Mot-clé:</strong> {articleKeyword || 'Non défini'}</div>
                    <div><strong>Contenu:</strong> {articleContent ? `${articleContent.length} caractères` : 'Non défini'}</div>
                    <div><strong>Temps de lecture:</strong> {articleContent ? calculateReadTime(articleContent) : 'N/A'}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Brouillon → Supabase | Publication → N8N → Supabase + localhost:3001
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveDraft}
                      disabled={isSavingDraft || !articleTitle.trim() || !articleContent.trim()}
                      className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                        isSavingDraft || !articleTitle.trim() || !articleContent.trim()
                          ? 'bg-gray-400 text-white cursor-not-allowed'
                          : 'bg-gray-600 text-white hover:bg-gray-700 transform hover:scale-105'
                      }`}
                    >
                      {isSavingDraft ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sauvegarde...
                        </span>
                      ) : (
                        '📝 Sauver brouillon'
                      )}
                    </button>

                    <button
                      onClick={handlePublishArticle}
                      disabled={isPublishing || !articleTitle.trim() || !articleContent.trim()}
                      className={`px-6 py-3 rounded-md text-white font-medium transition-all duration-200 ${
                        isPublishing || !articleTitle.trim() || !articleContent.trim()
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 transform hover:scale-105'
                      }`}
                    >
                      {isPublishing ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Publication...
                        </span>
                      ) : (
                        '🚀 Mettre en ligne'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-2">🔑 Nouveau Workflow par Mot-clé</h3>
                <p className="text-blue-700 text-sm">
                  <strong>1.</strong> Saisissez un mot-clé unique<br/>
                  <strong>2.</strong> N8N génère et sauvegarde l\'article automatiquement<br/>
                  <strong>3.</strong> Récupération automatique après 15 secondes<br/>
                  <strong>4.</strong> Éditez et publiez via N8N
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-2">☁️ Double Workflow N8N</h3>
                <p className="text-green-700 text-sm">
                  <strong>Génération:</strong> Mot-clé → N8N → Supabase → Récupération<br/>
                  <strong>Publication:</strong> Article → N8N → Supabase + localhost:3001<br/>
                  Mots-clés uniques pour éviter les doublons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
