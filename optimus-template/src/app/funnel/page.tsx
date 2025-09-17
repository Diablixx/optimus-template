import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Formation Marketing Digital Premium | Optimus',
  description: 'Accédez à notre formation complète en marketing digital et transformez votre business avec nos stratégies éprouvées.',
};

export default function FunnelPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              🚀 Formation Marketing Digital Premium
            </h1>
            <h2 className="mt-4 text-2xl font-bold text-white">
              "Maîtrisez les Stratégies Qui Génèrent 6 Chiffres"
            </h2>
            <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto">
              La formation complète pour transformer votre business avec des stratégies marketing éprouvées
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ce que vous allez maîtriser :
              </h3>
              <ul className="space-y-4">
                {[
                  "SEO Avancé - Techniques pour dominer Google",
                  "Funnels de Vente - Conversions à 40%+",
                  "Email Marketing - Séquences qui vendent automatiquement",
                  "Publicités Facebook & Google Ads rentables",
                  "Growth Hacking - Croissance exponentielle",
                  "Automation Marketing - Systèmes sur pilote automatique",
                  "Analytics & Optimisation - ROI maximisé",
                  "E-commerce - Boutiques à 7 chiffres"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-8 border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                  🔥 OFFRE LIMITÉE
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  Formation Complète
                </h4>
                <div className="text-center mb-6">
                  <span className="text-gray-500 line-through text-xl">2,997€</span>
                  <span className="text-4xl font-bold text-purple-600 ml-2">997€</span>
                  <div className="text-sm text-gray-600 mt-2">Économisez 2,000€ aujourd'hui</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  8+ heures de formation vidéo HD
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Templates et outils prêts à utiliser
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Support privé pendant 90 jours
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Garantie 30 jours satisfait ou remboursé
                </div>
              </div>
              
              <button
                type="button"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-md text-xl font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                💳 ACHETER MAINTENANT - 997€
              </button>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Paiement sécurisé • Accès immédiat • Facturation disponible
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Résultats de nos étudiants
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah M.", result: "+500% de revenus en 6 mois", business: "E-commerce Mode" },
                { name: "Pierre L.", result: "100k€/mois récurrents", business: "SaaS B2B" },
                { name: "Julie K.", result: "+2M de vues organiques", business: "Coach Business" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <p className="text-2xl font-bold text-purple-600 mb-2">
                    {testimonial.result}
                  </p>
                  <p className="text-gray-900 font-medium mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.business}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ⏰ Offre limitée - Plus que 48h !
            </h3>
            <p className="text-lg mb-6">
              Cette réduction de 2,000€ expire bientôt. Ne ratez pas cette opportunité unique.
            </p>
            <button
              type="button"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-md text-xl font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              🚀 JE PROFITE DE L'OFFRE MAINTENANT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}