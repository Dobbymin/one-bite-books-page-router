import Link from 'next/link';

import style from './main-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={style.container}>
      <header>
        <Link href='/'>ONEBITE BOOKS</Link>
      </header>
      <main>{children}</main>
      <footer>@dobbymin</footer>
    </div>
  );
};
