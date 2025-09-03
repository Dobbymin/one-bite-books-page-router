import { InferGetServerSidePropsType } from 'next';

import { bookAPI, randomBookAPI } from '../../apis';
import { BookItem } from '../../components';

import style from './book-item-section.module.scss';
import { getServerSideProps } from '@/pages';

// export const getServerSideProps = async () => {
//   const allBooks = await bookAPI();
//   const randomBooks = await randomBookAPI();

//   return {
//     props: { allBooks, randomBooks },
//   };
// };

export const BookItemSection = ({
  allBooks,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book) => (
          <BookItem key={`recommend-${book.id}`} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={`all-${book.id}`} {...book} />
        ))}
      </section>
    </div>
  );
};
