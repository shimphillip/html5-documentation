import Head from 'next/head';
import Header from './Header';
import globalStyles from '../styles/globalStyles';
import Main from './Main';

interface MyProps {
  children: React.ReactNode;
}

const Layout: React.FC<MyProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>HTML5 Documentation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/hybrid.min.css"
        />
      </Head>
      <Header></Header>
      <Main>{children}</Main>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Layout;
