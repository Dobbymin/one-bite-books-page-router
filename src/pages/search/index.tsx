import { useRouter } from 'next/router';

import { SearchbarLayout } from '@/features';

export default function SearchPage() {
  const router = useRouter();

  return (
    <div>
      <h1>검색: {router.query.q}</h1>
    </div>
  );
}

SearchPage.getLayout = (page: React.ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
