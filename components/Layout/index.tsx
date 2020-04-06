import Head from 'next/head';
import Header from './Header';
import globalStyles from '../styles/globalStyles';

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
      </Head>
      <Header></Header>
      <div className="container">{children}</div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Layout;
