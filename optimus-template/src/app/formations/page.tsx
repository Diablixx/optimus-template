import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Formations Marketing Digital | Optimus',
  description: 'Formations expertes en marketing digital, SEO, e-commerce. Apprenez avec nos cours vidéo premium.',
};

export default function FormationsPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gradient-to-r from-purple-800 to-indigo-800">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Formations Premium
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Maîtrisez le marketing digital avec nos formations vidéo complètes
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              Cours Disponibles
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Formation SEO Complète
                </h3>
                <p className="text-gray-600 mb-6">
                  Devenez expert en référencement naturel avec plus de 50 vidéos
                </p>
                <div className="text-3xl font-bold text-indigo-600 mb-4">297€</div>
                <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors">
                  Voir la formation
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  E-commerce Master Class
                </h3>
                <p className="text-gray-600 mb-6">
                  Créez et optimisez votre boutique en ligne rentable
                </p>
                <div className="text-3xl font-bold text-purple-600 mb-4">497€</div>
                <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors">
                  Voir la formation
                </button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Marketing Digital 360°
                </h3>
                <p className="text-gray-600 mb-6">
                  La formation complète pour maîtriser tous les canaux
                </p>
                <div className="text-3xl font-bold text-green-600 mb-4">697€</div>
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors">
                  Voir la formation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}