import Link from 'next/link';

const services = [
  {
    title: 'Optimisation SEO',
    description: 'Améliorer votre visibilité dans les moteurs de recherche avec des stratégies SEO éprouvées et personnalisées.',
    href: '/services/seo',
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    features: ['Audit SEO complet', 'Stratégie de mots-clés', 'Optimisation technique', 'Suivi des performances'],
  },
  {
    title: 'Marketing Digital',
    description: 'Stratégies marketing complètes pour attirer, convertir et fidéliser votre audience cible.',
    href: '/services/marketing-digital',
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    features: ['Content marketing', 'Réseaux sociaux', 'Email marketing', 'Analytics & reporting'],
  },
  {
    title: 'Solutions E-commerce',
    description: 'Créez et optimisez votre boutique en ligne pour maximiser vos conversions et revenus.',
    href: '/services/ecommerce',
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    features: ['Design UX/UI', 'Optimisation conversion', 'Intégrations paiement', 'Gestion catalogue'],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services d'Expert
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions personnalisées pour chaque étape de votre croissance digitale
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100">
                      {service.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    En savoir plus
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}