import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Ressources Marketing Digital | Optimus',
  description: 'Guides, templates, outils et ressources gratuites pour développer votre marketing digital.',
};

export default function RessourcesPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gradient-to-r from-teal-600 to-green-600">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ressources Gratuites
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Guides, templates, outils et conseils pour booster votre marketing digital
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Checklist SEO Complète
              </h3>
              <p className="text-gray-600 mb-6">
                Les 50 points essentiels pour optimiser votre référencement naturel
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                Télécharger PDF
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Templates Email Marketing
              </h3>
              <p className="text-gray-600 mb-6">
                10 templates d'emails qui convertissent, prêts à utiliser
              </p>
              <button className="text-purple-600 font-medium hover:text-purple-700">
                Télécharger ZIP
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Calculator ROI Marketing
              </h3>
              <p className="text-gray-600 mb-6">
                Outil Excel pour calculer le retour sur investissement de vos campagnes
              </p>
              <button className="text-green-600 font-medium hover:text-green-700">
                Télécharger Excel
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Guide Réseaux Sociaux
              </h3>
              <p className="text-gray-600 mb-6">
                Stratégies pour développer votre audience sur les réseaux sociaux
              </p>
              <button className="text-orange-600 font-medium hover:text-orange-700">
                Télécharger PDF
              </button>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Kit Analyse Concurrentielle
              </h3>
              <p className="text-gray-600 mb-6">
                Template pour analyser la stratégie digitale de vos concurrents
              </p>
              <button className="text-indigo-600 font-medium hover:text-indigo-700">
                Télécharger Kit
              </button>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Lexique Marketing Digital
              </h3>
              <p className="text-gray-600 mb-6">
                Plus de 200 termes et définitions du marketing digital expliqués
              </p>
              <button className="text-yellow-600 font-medium hover:text-yellow-700">
                Consulter en ligne
              </button>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎯 Guide Ultime du Marketing Digital
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Notre guide complet de 100+ pages pour maîtriser tous les aspects du marketing digital moderne
            </p>
            <button className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition-colors duration-200">
              Télécharger le Guide Complet
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}