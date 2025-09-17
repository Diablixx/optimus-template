import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Qui sommes-nous - Notre expertise en marketing digital | Optimus',
  description: 'Découvrez l\'équipe Optimus, ses valeurs et son expertise en marketing digital. Une équipe passionnée au service de votre croissance en ligne.',
};

export default function QuiSommesNousPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gray-800">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Qui sommes-nous
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Présentation de notre équipe et de nos valeurs
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Nous accompagnons les entreprises dans leur croissance digitale avec expertise et passion.
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">Des années d'expérience au service de votre réussite</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Résultats</h3>
              <p className="text-gray-600">Des stratégies orientées performance et ROI</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accompagnement</h3>
              <p className="text-gray-600">Un suivi personnalisé pour votre croissance</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-200">
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}