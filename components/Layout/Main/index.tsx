import ArticleWrapper from './ArticleWrapper';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <ArticleWrapper>{children}</ArticleWrapper>
    </div>
  );
};

export default Main;
