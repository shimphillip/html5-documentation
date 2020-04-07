import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const nav: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<nav>'}</span> tag defines a set
        of navigation links.
      </p>
      <p>
        Notice that NOT all links of a document should be inside a{' '}
        <span className="primary-color">{'<nav>'}</span> element. The{' '}
        <span className="primary-color">{'<nav>'}</span> element is intended
        only for major block of navigation links.
      </p>
      <p>
        Browsers, such as screen readers for disabled users, can use this
        element to determine whether to omit the initial rendering of this
        content.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
      `}
      </Highlight>
    </>
  );
};

export default nav;
