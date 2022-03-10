import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainSidebar from '@modules/Sidebar/MainSidebar';
import Layout from '@containers/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MainSidebar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
