import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Mentions légales - Informations légales Optimus',
  description: 'Consultez les mentions légales d\'Optimus, incluant les informations sur l\'éditeur, l\'hébergement, et les conditions d\'utilisation de notre site.',
};

export default function MentionsLegalesPage() {

  return (
    <Layout>
      <div className="bg-white">
        <div className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Mentions légales
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Informations légales et conditions d'utilisation du site Optimus
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                1. Informations sur l'éditeur
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  <strong>Raison sociale :</strong> Optimus SAS<br />
                  <strong>Forme juridique :</strong> Société par Actions Simplifiée<br />
                  <strong>Capital social :</strong> 10 000 euros<br />
                  <strong>RCS :</strong> Paris B 123 456 789<br />
                  <strong>SIRET :</strong> 123 456 789 00012<br />
                  <strong>N° TVA intracommunautaire :</strong> FR12 123456789
                </p>
                <p className="mb-4">
                  <strong>Siège social :</strong><br />
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
                <p className="mb-4">
                  <strong>Directeur de la publication :</strong> [Nom du Directeur]<br />
                  <strong>Contact :</strong> contact@optimus-digital.fr<br />
                  <strong>Téléphone :</strong> +33 (0)1 23 45 67 89
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                2. Hébergement du site
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-4">
                  <strong>Hébergeur :</strong> Vercel Inc.<br />
                  <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
                  <strong>Site web :</strong> <a href="https://vercel.com" className="text-indigo-600 hover:text-indigo-800">https://vercel.com</a>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                3. Propriété intellectuelle
              </h2>
              <p className="mb-4 text-gray-700">
                L'ensemble de ce site relève de la législation française et internationale 
                sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                reproduction sont réservés, y compris pour les documents téléchargeables 
                et les représentations iconographiques et photographiques.
              </p>
              <p className="mb-4 text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique 
                quel qu'il soit est formellement interdite sauf autorisation expresse du 
                directeur de la publication.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                4. Responsabilité
              </h2>
              <p className="mb-4 text-gray-700">
                Les informations contenues sur ce site sont aussi précises que possible 
                et le site remis à jour à différentes périodes de l'année, mais peut 
                toutefois contenir des inexactitudes ou des omissions.
              </p>
              <p className="mb-4 text-gray-700">
                Si vous constatez une lacune, erreur ou ce qui parait être un 
                dysfonctionnement, merci de bien vouloir le signaler par email, à 
                l'adresse contact@optimus-digital.fr, en décrivant le problème de la 
                façon la plus précise possible.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Liens hypertextes
              </h2>
              <p className="mb-4 text-gray-700">
                Les liens hypertextes mis en place dans le cadre du présent site web 
                en direction d'autres ressources présentes sur le réseau Internet ne 
                sauraient engager la responsabilité de Optimus.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                6. Collecte et protection des données
              </h2>
              <p className="mb-4 text-gray-700">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 
                modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d'un droit d'accès, de rectification, de suppression et 
                d'opposition au traitement de vos données personnelles.
              </p>
              <p className="mb-4 text-gray-700">
                Pour exercer ces droits ou pour toute question sur le traitement de 
                vos données dans ce dispositif, vous pouvez nous contacter par email 
                à l'adresse : contact@optimus-digital.fr
              </p>
              <p className="mb-4 text-gray-700">
                Si vous estimez, après nous avoir contactés, que vos droits « Informatique 
                et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation 
                à la CNIL.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                7. Cookies
              </h2>
              <p className="mb-4 text-gray-700">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et 
                analyser le trafic. Vous pouvez contrôler l'utilisation des cookies via 
                les paramètres de votre navigateur.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 mb-2">Types de cookies utilisés :</h3>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Cookies techniques nécessaires au fonctionnement du site</li>
                  <li>Cookies d'analyse (Google Analytics) pour mesurer l'audience</li>
                  <li>Cookies de préférences pour mémoriser vos choix</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                8. Droit applicable
              </h2>
              <p className="mb-4 text-gray-700">
                Tout litige en relation avec l'utilisation du site www.optimus-digital.fr 
                est soumis au droit français. Il est fait attribution exclusive de 
                juridiction aux tribunaux compétents de Paris.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                9. Crédits
              </h2>
              <p className="mb-4 text-gray-700">
                <strong>Conception et réalisation :</strong> Équipe Optimus<br />
                <strong>Crédits photos :</strong> Unsplash, Pexels<br />
                <strong>Technologies utilisées :</strong> Next.js, Tailwind CSS, Vercel
              </p>
            </section>

            <section className="mb-12 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact
              </h2>
              <p className="text-gray-700">
                Pour toute question concernant ces mentions légales, 
                n'hésitez pas à nous contacter :
              </p>
              <div className="mt-4">
                <p className="mb-2">
                  <strong>Email :</strong> 
                  <a href="mailto:contact@optimus-digital.fr" className="text-indigo-600 hover:text-indigo-800 ml-2">
                    contact@optimus-digital.fr
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Téléphone :</strong> +33 (0)1 23 45 67 89
                </p>
                <p>
                  <strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France
                </p>
              </div>
            </section>

            <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
              <p>Dernière mise à jour : Janvier 2025</p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  );
}