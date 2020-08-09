import Head from 'next/head';
import { Page } from '@zeit-ui/react';

export default function Layout({ children }) {
  return (
    <Page>
      <Head>
        <title>borales.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Page>
  );
}
