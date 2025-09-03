import { BASE_URL } from '@/shared';
import { BookData } from '@/shared';

const SEARCH_BOOK_API_PATH = `${BASE_URL}/book/search`;

interface SearchBookResponse extends Array<BookData> {}

export const searchBookAPI = async (q?: string): Promise<SearchBookResponse> => {
  try {
    const url = new URL(SEARCH_BOOK_API_PATH);
    if (q) {
      url.searchParams.append('q', q);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('searchBookAPI error:', error);
    return [];
  }
};
