import { BookData, BookItem } from '@/shared';

type Props = {
  allBooks: BookData[];
};

export const AllBooksSection = ({ allBooks }: Props) => {
  return (
    <section>
      <h3>등록된 모든 도서</h3>
      {allBooks.map((book) => (
        <BookItem key={`all-${book.id}`} {...book} />
      ))}
    </section>
  );
};
