import { BookData, BookItem } from '@/shared';

type Props = {
  randomBooks: BookData[];
};

export const RandomBooksSection = ({ randomBooks }: Props) => {
  return (
    <section>
      <h3>지금 추천하는 도서</h3>
      {randomBooks.map((book) => (
        <BookItem key={`recommend-${book.id}`} {...book} />
      ))}
    </section>
  );
};
