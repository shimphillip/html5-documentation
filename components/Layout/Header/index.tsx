import Link from 'next/link';
import { colors } from '../../styles/theme';

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <Link href="/">
        <img src="/static/logo.svg" alt="html5 logo" />
      </Link>
      <h1>
        HTML5 <span>Semantic</span> Elements
      </h1>
      <style jsx>{`
        header {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 22vh;
          margin-bottom: 5vh;
          background: ${colors.mainBackground};
        }

        @media only screen and (max-width: 414px) {
          header {
            flex-direction: column;
            margin: 0;
            text-align: center;
            height: 250px;
          }
        }

        img {
          cursor: pointer;
        }

        @media only screen and (max-width: 414px) {
          img {
            height: 100px;
          }
        }

        h1 {
          font-size: 4rem;
        }

        span {
          color: ${colors.darkPrimary};
          text-transform: uppercase;
        }
      `}</style>
    </header>
  );
};

export default Header;
