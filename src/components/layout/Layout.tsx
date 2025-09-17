import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { generateOrganizationStructuredData } from '@/lib/seo';
import { NextSeoProps } from 'next-seo';

interface LayoutProps {
  children: ReactNode;
  seo?: NextSeoProps;
  className?: string;
}

export default function Layout({ children, seo, className = '' }: LayoutProps) {
  const organizationData = generateOrganizationStructuredData();

  return (
    <>
      <SEOHead
        {...seo}
        structuredData={[organizationData]}
      />
      <div className={`min-h-screen flex flex-col ${className}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}