import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import MediaQuery from 'react-responsive';
import { colors, deviceWidths } from '../../../styles/theme';

const { phone, tablet } = deviceWidths;

const Navigation = withRouter((props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const currentPath = props.router.pathname.slice(1);
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

  return (
    <nav>
      <ul>
        <MediaQuery maxWidth={414}>
          <li onClick={handleToggle}>
            <a>Menu Toggle</a>
          </li>
          {openMenu &&
            menus.map((menu) => {
              return (
                <li
                  key={menu}
                  onClick={handleToggle}
                  className={
                    currentPath === menu
                      ? 'active'
                      : '' || (menu === 'introduction' && !currentPath.length)
                      ? 'active'
                      : ''
                  }
                >
                  <Link href={menu === 'introduction' ? '/' : `/${menu}`}>
                    <a>{menu.toUpperCase()}</a>
                  </Link>
                </li>
              );
            })}
        </MediaQuery>
        <MediaQuery minWidth={415}>
          {menus.map((menu) => {
            return (
              <li
                key={menu}
                className={
                  currentPath === menu
                    ? 'active'
                    : '' || (menu === 'introduction' && !currentPath.length)
                    ? 'active'
                    : ''
                }
              >
                <Link href={menu === 'introduction' ? '/' : `/${menu}`}>
                  <a>{menu.toUpperCase()}</a>
                </Link>
              </li>
            );
          })}
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

          li:last-child {
            border-bottom: none;
          }

          a {
            display: block;
            padding: 12px 30px;
            text-decoration: none;
            color: ${colors.secondary};
          }

          a:hover {
            background: ${colors.darkPrimary};
          }
        `}
      </style>
    </nav>
  );
});

export default Navigation;
