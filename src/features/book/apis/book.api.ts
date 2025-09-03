import { BASE_URL, BookData } from '@/shared';

export let BOOK_API_PATH = `${BASE_URL}/book`;

interface BookResponse extends Array<BookData> {}

export const bookAPI = async (q?: string): Promise<BookResponse> => {
  try {
    if (q) {
      BOOK_API_PATH += `/search?q=${q}`;
    }
    const response = await fetch(BOOK_API_PATH);
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error('bookAPI error', error);
    return [];
  }
};
