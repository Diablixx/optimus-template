import Button from './Button';

export default function CTASection() {
  return (
    <section className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Prêt à faire décoller</span>
          <span className="block">votre business ?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          Découvrez nos ressources gratuites et formations premium pour maîtriser le marketing digital moderne.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="/offre-pdf" 
            variant="secondary" 
            size="lg"
            className="bg-white text-indigo-700 hover:bg-gray-50"
          >
            Guide PDF Gratuit
          </Button>
          <Button 
            href="/formations" 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-indigo-700"
          >
            Voir les Formations
          </Button>
        </div>
      </div>
    </section>
  );
}