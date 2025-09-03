import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import style from './searchbar-layout.module.scss';

type Props = {
  children: React.ReactNode;
};

export const SearchbarLayout = ({ children }: Props) => {
  const [search, setSearch] = useState('');

  const router = useRouter();

  // 새로고침 시 쿼리 반영
  useEffect(() => {
    setSearch((router.query.q as string) || '');
  }, [router.query.q]);

  const onSubmit = () => {
    if (!search || router.query.q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.container}>
        <input
          placeholder='검색어를 입력하세요...'
          value={search}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
};
