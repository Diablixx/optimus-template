import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Contact - Parlons de votre projet | Optimus',
  description: 'Contactez notre équipe d\'experts en marketing digital. Devis gratuit et conseil personnalisé.',
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gray-900">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Obtenez un audit gratuit et des recommandations personnalisées pour votre croissance digitale
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contactez-nous
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Votre projet *
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Décrivez-nous votre projet, vos objectifs, vos défis..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-4 px-6 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
            
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informations de contact
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@optimus-digital.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Adresse</h4>
                    <p className="text-gray-600">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Horaires</h4>
                    <p className="text-gray-600">
                      Lun - Ven: 9h00 - 18h00<br />
                      Réponse sous 24h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-indigo-50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-indigo-900 mb-3">
                  🎯 Audit gratuit inclus
                </h4>
                <p className="text-indigo-700">
                  Recevez une analyse personnalisée de votre présence digitale 
                  et nos recommandations d'amélioration - sans engagement !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}