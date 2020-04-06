import { colors } from '../../../styles/theme';

interface ArticleProps {
  children: React.ReactNode;
}

const ArticleWrapper: React.FC<ArticleProps> = ({ children }) => {
  return (
    <article>
      {children}
      <style jsx>
        {`
          article {
            margin-bottom: 40px;
            padding: 2rem;
            background: ${colors.mainBackground};
          }

          @media only screen and (max-width: 414px) {
            article {
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </article>
  );
};

export default ArticleWrapper;
