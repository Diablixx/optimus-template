import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export const metadata = {
  title: 'Nos Services Marketing Digital | Optimus',
  description: 'Découvrez nos services d\'experts : SEO, marketing digital, e-commerce, formations et conseil personnalisé.',
};

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-indigo-800">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Nos Services
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Solutions complètes pour développer votre présence digitale et booster vos ventes en ligne
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <Link href="/services/seo" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Référencement SEO
                </h3>
                <p className="text-gray-600 mb-6">
                  Dominez Google avec nos stratégies SEO éprouvées. Audit complet, optimisation technique et suivi des performances.
                </p>
                <div className="text-indigo-600 font-medium group-hover:text-indigo-700">
                  En savoir plus →
                </div>
              </div>
            </Link>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Marketing Digital
              </h3>
              <p className="text-gray-600 mb-6">
                Stratégies complètes pour attirer, convertir et fidéliser. Social media, email marketing, publicités payantes.
              </p>
              <div className="text-purple-600 font-medium">
                Bientôt disponible
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E-commerce
              </h3>
              <p className="text-gray-600 mb-6">
                Optimisation de boutiques en ligne pour maximiser les conversions et les revenus de votre e-commerce.
              </p>
              <div className="text-green-600 font-medium">
                Bientôt disponible
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'un service sur-mesure ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Chaque projet est unique. Parlons de vos besoins spécifiques et créons une solution adaptée.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
            >
              Discuter de mon projet
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}