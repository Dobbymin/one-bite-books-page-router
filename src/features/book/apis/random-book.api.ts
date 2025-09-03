import { BASE_URL } from '@/shared';

import { BookData } from '@/shared';

export const RANDOM_BOOK_API_PATH = `${BASE_URL}/book/random`;

interface RandomBookResponse extends Array<BookData> {}

export const randomBookAPI = async (): Promise<RandomBookResponse> => {
  try {
    const response = await fetch(RANDOM_BOOK_API_PATH, {
      cache: 'force-cache',
    });
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error('bookAPI error', error);
    return [];
  }
};
