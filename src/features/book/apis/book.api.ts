import { BASE_URL, fetchInstance } from '@/shared';

import { BookData } from './../types';

export const BOOK_API_PATH = `${BASE_URL}/book`;

interface BookResponse extends Array<BookData> {}

export const bookAPI = async (): Promise<BookResponse> => {
  try {
    const response = await fetch(BOOK_API_PATH);
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error('bookAPI error', error);
    return [];
  }
};
