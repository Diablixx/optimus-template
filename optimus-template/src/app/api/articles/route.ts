import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Enable CORS for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS(_request: NextRequest) {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  try {
    const { 
      title, 
      content, 
      author = 'Optimus SaaS', 
      category = 'Marketing',
      supabaseId,
      slug: providedSlug
    } = await request.json();
    
    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400, headers: corsHeaders });
    }

    // Use provided slug or create slug from title
    const slug = providedSlug || title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove accents
      .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();

    // Create the article page content
    const pageContent = `import Layout from '@/components/layout/Layout';

export const metadata = {
  title: '${title.replace(/'/g, "\\'")} | Optimus',
  description: '${content.substring(0, 150).replace(/'/g, "\\'")}...',
};

export default function ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gray-800">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ${title.replace(/'/g, "\\'")}
            </h1>
            <div className="mt-6 flex items-center text-gray-300">
              <span>Par ${author}</span>
              <span className="mx-2">•</span>
              <span>${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="mx-2">•</span>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded-full">
                ${category}
              </span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            ${content.split('\n').map(paragraph => 
              paragraph.trim() ? `<p className="mb-6 text-lg text-gray-700 leading-relaxed">${paragraph.replace(/'/g, "\\'")}</p>` : ''
            ).join('\n            ')}
          </div>
        </div>
      </div>
    </Layout>
  );
}`;

    // Write the article page file
    const articleDir = path.join(process.cwd(), 'src', 'app', 'articles', slug);
    const articleFilePath = path.join(articleDir, 'page.tsx');

    // Create directory if it doesn't exist
    if (!fs.existsSync(articleDir)) {
      fs.mkdirSync(articleDir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(articleFilePath, pageContent);

    // Update articles data file (we'll create this)
    const articlesDataPath = path.join(process.cwd(), 'src', 'data', 'articles.json');
    const articlesDataDir = path.dirname(articlesDataPath);
    
    // Create data directory if it doesn't exist
    if (!fs.existsSync(articlesDataDir)) {
      fs.mkdirSync(articlesDataDir, { recursive: true });
    }

    // Read existing articles or create empty array
    let articles = [];
    if (fs.existsSync(articlesDataPath)) {
      articles = JSON.parse(fs.readFileSync(articlesDataPath, 'utf8'));
    }

    // Add new article
    const newArticle = {
      id: Date.now(),
      title,
      slug,
      excerpt: content.substring(0, 200) + '...',
      author,
      date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
      category,
      readTime: Math.ceil(content.split(' ').length / 200) + ' min'
    };

    articles.unshift(newArticle); // Add to beginning

    // Write updated articles data
    fs.writeFileSync(articlesDataPath, JSON.stringify(articles, null, 2));

    return NextResponse.json({ 
      success: true, 
      message: 'Article publié avec succès',
      slug,
      url: `http://localhost:3001/articles/${slug}`,
      supabaseId: supabaseId || 'legacy'
    }, { headers: corsHeaders });

  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500, headers: corsHeaders });
  }
}