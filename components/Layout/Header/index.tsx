import Link from 'next/link';
import { colors, deviceWidths } from '../../styles/theme';

const { phone } = deviceWidths;

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <Link href="/">
        <img src="/logo.svg" alt="html5 logo" />
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

        @media only screen and (max-width: ${phone}) {
          header {
            flex-direction: column;
            margin: 0;
            text-align: center;
            height: 250px;
          }
        }

        img {
          cursor: pointer;
          height: 150px;
          width: 150px;
        }

        @media only screen and (max-width: ${phone}) {
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
