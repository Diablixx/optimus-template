import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Test de la mise en page | Optimus',
  description: 'Ceci est un test de la mise en page...',
};

export default function TestDeLaMiseEnPagePage() {
  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gray-800">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Test de la mise en page
            </h1>
            <div className="mt-6 flex items-center text-gray-300">
              <span>Par Optimus SaaS</span>
              <span className="mx-2">•</span>
              <span>14 septembre 2025</span>
              <span className="mx-2">•</span>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded-full">
                Marketing
              </span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">Ceci est un test de la mise en page</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}