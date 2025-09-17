import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Guide PDF Gratuit - Les Secrets du Marketing Digital | Optimus',
  description: 'Téléchargez notre guide PDF gratuit et découvrez les stratégies marketing qui génèrent des résultats.',
};

export default function OffrePDFPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-4xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              🎁 Guide PDF Gratuit
            </h1>
            <h2 className="mt-4 text-2xl font-bold text-white">
              "Les 10 Stratégies Marketing Qui Multiplient Vos Ventes"
            </h2>
            <p className="mt-6 text-xl text-gray-100 max-w-2xl mx-auto">
              Découvrez les secrets que 97% des entrepreneurs ignorent pour exploser leur chiffre d'affaires
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ce que vous allez apprendre :
              </h3>
              <ul className="space-y-4">
                {[
                  "La stratégie SEO qui génère 10x plus de trafic",
                  "Comment convertir 35% de vos visiteurs en clients",
                  "Le secret des tunnels de vente à haute conversion",
                  "L'astuce psychology pour doubler vos ventes",
                  "La méthode pour créer du contenu viral",
                  "Comment automatiser 80% de votre marketing"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Téléchargement Immédiat
                </h4>
                <p className="text-gray-600">
                  Recevez le PDF par email en moins de 2 minutes
                </p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-md text-lg font-bold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  🚀 JE VEUX MON GUIDE GRATUIT !
                </button>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                Vos données sont sécurisées. Pas de spam, désinscription en 1 clic.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Ils ont transformé leur business grâce à nos conseils
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Marie L.", result: "+250% de CA en 6 mois" },
                { name: "Thomas K.", result: "10 000 visiteurs/mois" },
                { name: "Sophie M.", result: "+180% de conversions" }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <p className="text-2xl font-bold text-indigo-600 mb-2">
                    {testimonial.result}
                  </p>
                  <p className="text-gray-700 font-medium">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}