import Header from './Header';
import globalStyles from '../styles/globalStyles';
import Main from './Main';
import Meta from './Meta';
import Footer from './Footer';

interface MyProps {
  children: React.ReactNode;
}

const Layout: React.FC<MyProps> = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      <Main>{children}</Main>
      <style jsx global>
        {globalStyles}
      </style>
      <Footer />
    </div>
  );
};

export default Layout;
