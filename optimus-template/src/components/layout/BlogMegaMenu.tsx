'use client';

import Link from 'next/link';
import { useArticles } from '@/hooks/useArticles';
import { useState, useRef, useEffect } from 'react';

interface BlogMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogMegaMenu({ isOpen, onClose }: BlogMegaMenuProps) {
  const [mounted, setMounted] = useState(false);
  const { articles, loading, error } = useArticles(10); // Limit to 10 articles
  const menuRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-0 w-screen max-w-md bg-white shadow-xl rounded-lg border border-gray-200 z-50 mt-2"
    >
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
        </div>

        {/* Articles Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
            Articles
          </h4>

          {loading && (
            <div className="space-y-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-red-600 text-sm p-3 bg-red-50 rounded-md">
              {error}
            </div>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-gray-500 text-sm p-3 bg-gray-50 rounded-md">
              Aucun article publié pour le moment.
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="space-y-3">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="block group"
                  onClick={onClose}
                >
                  <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <h5 className="text-sm font-medium text-gray-900 group-hover:text-indigo-600 line-clamp-2">
                      {article.title}
                    </h5>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(article.created_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}