import Navigation from './Navigation';
import ArticleWrapper from './ArticleWrapper';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main>
      <Navigation />
      <ArticleWrapper>{children}</ArticleWrapper>
      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
            margin: 0 auto;
            width: 65vw;
          }

          @media only screen and (max-width: 1024px) {
            main {
              width: 90vw;
            }
          }

          @media only screen and (max-width: 768px) {
            main {
              width: 100vw;
            }
          }

          @media only screen and (max-width: 414px) {
            main {
              flex-direction: column;
            }
          }
        `}
      </style>
    </main>
  );
};

export default Main;
