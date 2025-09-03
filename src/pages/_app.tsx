import type { ReactNode } from 'react';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

import '@/shared/styles/globals.css';
import { MainLayout } from '@/features';
import { AppProviders } from '@/app';

type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AppProviders>
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>;
    </AppProviders>
  );
}
