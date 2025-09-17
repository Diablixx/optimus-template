import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export const metadata = {
  title: 'Services SEO - Optimisation pour moteurs de recherche | Optimus',
  description: 'Boostez votre visibilité en ligne avec nos services SEO experts. Audit technique, optimisation de contenu, stratégie de mots-clés et suivi des performances.',
};

export default function SEOServicePage() {

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-800 to-purple-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-20"
              src="/images/seo-analytics.jpg"
              alt="Analyses SEO et données de performance"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Services SEO Expert
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              Propulsez votre site web vers les premières positions de Google avec notre 
              expertise SEO éprouvée. Audit complet, stratégie personnalisée et résultats mesurables.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="mr-4">
                Audit SEO gratuit
              </Button>
              <Button href="/offre-pdf" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-800">
                Guide SEO PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Services Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Nos Services SEO Complets
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Une approche holistique du référencement naturel pour des résultats durables
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    Audit SEO Technique
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Analyse complète de votre site web pour identifier tous les problèmes 
                  techniques qui impactent votre référencement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vitesse de chargement et Core Web Vitals
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Architecture et maillage interne
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Indexation et crawlabilité
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optimisation mobile et responsive
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">
                    Optimisation de Contenu
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Optimisation de vos contenus existants et création de nouveaux contenus 
                  ciblés pour améliorer votre positionnement.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Recherche et analyse de mots-clés
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optimisation des balises title et meta
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Structure sémantique et schema markup
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optimisation des images et médias
                  </li>
                </ul>
              </div>
            </div>

            {/* Cocoon Interlinking */}
            <div className="mt-16 bg-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Services Complémentaires SEO
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Link href="/services/marketing-digital" className="group">
                  <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600">Marketing Digital</h4>
                    <p className="text-sm text-gray-600 mt-2">Amplifiez votre SEO avec une stratégie marketing globale</p>
                  </div>
                </Link>
                <Link href="/services/ecommerce" className="group">
                  <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600">E-commerce SEO</h4>
                    <p className="text-sm text-gray-600 mt-2">Optimisation spécifique pour boutiques en ligne</p>
                  </div>
                </Link>
                <Link href="/formations" className="group">
                  <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600">Formation SEO</h4>
                    <p className="text-sm text-gray-600 mt-2">Apprenez les techniques SEO</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4">
                Résultats SEO Mesurables
              </h2>
              <p className="text-xl text-gray-300">
                Nos clients obtiennent des résultats concrets et durables
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">+250%</div>
                <div className="text-lg font-medium mb-2">Trafic Organique</div>
                <div className="text-gray-400">Augmentation moyenne en 6 mois</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">Top 3</div>
                <div className="text-lg font-medium mb-2">Positions Google</div>
                <div className="text-gray-400">85% des mots-clés ciblés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">+180%</div>
                <div className="text-lg font-medium mb-2">Leads Qualifiés</div>
                <div className="text-gray-400">Amélioration des conversions</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Prêt à Booster votre SEO ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Obtenez un audit SEO gratuit et découvrez le potentiel de votre site web
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Audit SEO Gratuit
              </Button>
              <Button href="/offre-pdf" variant="outline" size="lg">
                Guide SEO PDF
              </Button>
            </div>
          </div>
        </section>
      </div>

    </Layout>
  );
}