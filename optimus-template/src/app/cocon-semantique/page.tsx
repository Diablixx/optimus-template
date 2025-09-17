import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Cocon Sémantique SEO | Optimus',
  description: 'Découvrez notre stratégie de cocon sémantique pour optimiser votre référencement naturel et améliorer votre positionnement sur Google.',
};

export default function CoconSemantiquePage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cocon Sémantique
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Stratégie avancée de référencement naturel pour dominer votre secteur d'activité
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Qu'est-ce qu'un cocon sémantique ?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Le cocon sémantique est une technique SEO avancée qui consiste à créer un maillage interne optimisé 
                autour d'une thématique précise. Cette méthode permet d'améliorer significativement le positionnement 
                de vos pages sur les moteurs de recherche.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Architecture thématique</h4>
                    <p className="text-gray-600">Organisation logique des contenus par univers sémantique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Maillage interne optimisé</h4>
                    <p className="text-gray-600">Liens stratégiques entre les pages pour renforcer l'autorité</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">Contenu de qualité</h4>
                    <p className="text-gray-600">Articles experts qui répondent aux intentions de recherche</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Les étapes de création
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Analyse sémantique</h4>
                    <p className="text-gray-600 text-sm">Étude des mots-clés et intentions de recherche</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Architecture du cocon</h4>
                    <p className="text-gray-600 text-sm">Définition de la structure et de la hiérarchie</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Production de contenu</h4>
                    <p className="text-gray-600 text-sm">Rédaction des articles selon le plan établi</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Optimisation technique</h4>
                    <p className="text-gray-600 text-sm">Mise en place du maillage et optimisations SEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à dominer votre marché ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre expertise en cocon sémantique vous garantit des résultats mesurables et durables
            </p>
            <button className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-200">
              Demander un audit gratuit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}