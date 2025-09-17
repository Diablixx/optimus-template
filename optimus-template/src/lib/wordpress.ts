import { WordPressPost, WordPressPage } from '@/types/wordpress';

// For now, we'll use JSON files as mock WordPress data
// Later, this can be easily replaced with actual WordPress REST API calls

export async function getPosts(): Promise<WordPressPost[]> {
  try {
    // In development, we'll read from JSON files
    if (process.env.NODE_ENV === 'development') {
      const postsData = await import('@/data/posts/sample-posts.json');
      return postsData.default;
    }
    
    // In production, this would call the actual WordPress REST API
    const response = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const posts = await getPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function getPages(): Promise<WordPressPage[]> {
  try {
    // In development, we'll read from JSON files
    if (process.env.NODE_ENV === 'development') {
      const pagesData = await import('@/data/pages/sample-pages.json');
      return pagesData.default;
    }
    
    // In production, this would call the actual WordPress REST API
    const response = await fetch(`${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/pages`);
    if (!response.ok) {
      throw new Error('Failed to fetch pages');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  try {
    const pages = await getPages();
    return pages.find(page => page.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
    return null;
  }
}