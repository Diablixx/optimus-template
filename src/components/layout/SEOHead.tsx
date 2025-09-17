import Head from 'next/head';
import { NextSeo, NextSeoProps } from 'next-seo';

interface SEOHeadProps extends NextSeoProps {
  structuredData?: any[];
}

export default function SEOHead({ structuredData, ...nextSeoProps }: SEOHeadProps) {
  return (
    <>
      <NextSeo
        languageAlternates={[
          {
            hrefLang: 'fr',
            href: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          },
        ]}
        {...nextSeoProps}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Language" content="fr" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        {structuredData && structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </Head>
    </>
  );
}