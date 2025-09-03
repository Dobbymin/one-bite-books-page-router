import { BASE_URL } from '@/shared';

import { BookData } from '@/shared';

export const DETAIL_BOOK_API_PATH = (id: number) => `${BASE_URL}/book/${id}`;

interface DetailBookResponse extends BookData {}

export const detailBookAPI = async (id: number): Promise<DetailBookResponse | null> => {
  try {
    const response = await fetch(DETAIL_BOOK_API_PATH(id));
    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error('detailBookAPI error', error);
    return null;
  }
};
