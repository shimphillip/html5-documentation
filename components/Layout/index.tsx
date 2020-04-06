import Header from './Header';
import globalStyles from '../styles/globalStyles';
import Main from './Main';
import Meta from './Meta';

interface MyProps {
  children: React.ReactNode;
}

const Layout: React.FC<MyProps> = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header></Header>
      <Main>{children}</Main>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
};

export default Layout;
