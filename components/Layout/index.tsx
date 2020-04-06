import Header from './Header';

interface MyProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<MyProps> = ({ title, children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;
