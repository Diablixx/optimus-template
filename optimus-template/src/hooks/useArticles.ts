'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export type Article = {
  id: number
  title: string
  content?: string
  slug: string
  author?: string
  category?: string
  excerpt?: string
  meta_description?: string
  read_time?: string
  published: boolean
  created_at: string
  updated_at?: string
  keyword?: string
}

interface UseArticlesResult {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

export function useArticles(limit?: number): UseArticlesResult {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        setError(null);

        // Check if environment variables are available
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          console.warn('Supabase environment variables not found');
          setError('Configuration manquante');
          return;
        }

        const supabase = createClient(supabaseUrl, supabaseAnonKey);

        let query = supabase
          .from('articles')
          .select('id, title, slug, published, created_at')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (limit) {
          query = query.limit(limit);
        }

        const { data, error: supabaseError } = await query;

        if (supabaseError) {
          console.error('Error fetching articles:', supabaseError);
          setError('Erreur lors du chargement des articles');
          return;
        }

        setArticles(data || []);
      } catch (err) {
        console.error('Error in fetchArticles:', err);
        setError('Erreur inattendue');
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, [limit]);

  return { articles, loading, error };
}