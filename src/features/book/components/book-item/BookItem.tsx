import Link from 'next/link';
import { BookData } from '../../types';
import style from './book-item.module.scss';

type Props = BookData;

export const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  description,
  coverImgUrl,
}: Props) => {
  return (
    <Link href={`/book/${id}`} className={style.container}>
      <img src={coverImgUrl} alt={title} />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <br />
        <div className={style.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};
