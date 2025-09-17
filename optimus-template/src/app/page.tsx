import Layout from '@/components/layout/Layout';
import Hero from '@/components/ui/Hero';
import ServicesSection from '@/components/ui/ServicesSection';
import CTASection from '@/components/ui/CTASection';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Pourquoi choisir Optimus ?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Une approche complète du marketing digital pour des résultats durables
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="lg:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expertise & Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts combine les dernières tendances du marketing digital 
                avec des stratégies éprouvées pour maximiser votre retour sur investissement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Stratégies personnalisées selon vos objectifs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Suivi transparent des performances</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Support continu et formations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Résultats Garantis
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-3xl font-bold">+150%</div>
                  <div className="text-indigo-100">Croissance moyenne du trafic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">+85%</div>
                  <div className="text-indigo-100">Amélioration des conversions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-indigo-100">Support client</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-indigo-100">Clients satisfaits</div>
                </div>
              </div>
              <p className="text-indigo-100">
                Rejoignez nos centaines de clients qui ont transformé leur business 
                grâce à nos solutions marketing digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
