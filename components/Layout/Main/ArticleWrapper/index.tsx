import { colors, deviceWidths } from '../../../styles/theme';

const { phone } = deviceWidths

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

          @media only screen and (max-width: ${phone}) {
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
