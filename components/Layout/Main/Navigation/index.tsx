import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import MediaQuery from 'react-responsive';
import { colors, deviceWidths } from '../../../styles/theme';

const { phone, tablet } = deviceWidths;

const Navigation = withRouter((props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const currentPath: string = props.router.pathname.slice(1);
  const menus = [
    'introduction',
    'article',
    'aside',
    'details',
    'figcaption',
    'figure',
    'footer',
    'header',
    'main',
    'mark',
    'nav',
    'section',
    'summary',
    'time',
  ];

  const handleToggle = () => {
    setOpenMenu(!openMenu);
  };

  const activateMenu = (menu: string, currentPath: string): string => {
    // handle introduction menu
    if (menu === 'introduction' && currentPath === '') {
      return 'active';
    }
    if (currentPath === menu) {
      return 'active';
    }
    return '';
  };

  const handleRoutes = (menu: string): string =>
    menu === 'introduction' ? '/' : `/${menu}`;

  return (
    <nav>
      <ul>
        <MediaQuery maxWidth={414}>
          <li onClick={handleToggle}>
            <a>Menu Toggle</a>
          </li>
          {openMenu &&
            menus.map((menu) => (
              <li
                key={menu}
                onClick={handleToggle}
                className={activateMenu(menu, currentPath)}
              >
                <Link href={handleRoutes(menu)}>
                  <a>{menu.toUpperCase()}</a>
                </Link>
              </li>
            ))}
        </MediaQuery>
        <MediaQuery minWidth={415}>
          {menus.map((menu) => (
            <li key={menu} className={activateMenu(menu, currentPath)}>
              <Link href={handleRoutes(menu)}>
                <a>{menu.toUpperCase()}</a>
              </Link>
            </li>
          ))}
        </MediaQuery>
      </ul>
      <style jsx>
        {`
          nav {
            display: inline-block;
            font-weight: bold;
            text-align: right;
            font-size: 1.3rem;
            margin: 0 5vw 40px 0;
          }

          @media only screen and (max-width: ${tablet}) {
            nav {
              margin: 0 3vw 40px 0;
            }
          }

          @media only screen and (max-width: ${phone}) {
            nav {
              margin: 0;
              text-align: center;
            }
          }

          ul {
            list-style: none;
          }

          li {
            background: ${colors.primary};
            border-bottom: 2px solid ${colors.secondary};
            transition: 0.3s ease-in-out;
          }

          li.active {
            background: ${colors.darkPrimary};
          }

          li:first-child {
            border-top: 2px solid ${colors.secondary};
          }

          a {
            display: block;
            padding: 12px 30px;
            text-decoration: none;
            color: ${colors.secondary};
            transition: 0.2s ease-in-out;
          }

          a:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </nav>
  );
});

export default Navigation;
