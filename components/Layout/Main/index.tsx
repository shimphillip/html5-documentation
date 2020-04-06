import Navigation from './Navigation';
import ArticleWrapper from './ArticleWrapper';
import { deviceWidths } from '../../styles/theme';

const { phone, tablet, desktop } = deviceWidths;

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
            margin: 0 auto;
            width: 65vw;
          }

          @media only screen and (max-width: ${desktop}) {
            main {
              width: 90vw;
            }
          }

          @media only screen and (max-width: ${tablet}) {
            main {
              width: 100vw;
            }
          }

          @media only screen and (max-width: ${phone}) {
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
