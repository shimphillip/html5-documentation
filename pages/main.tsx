import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const main: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<main>'}</span> tag specifies the
        main content of a document.
      </p>
      <p>
        The content inside the <span className="primary-color">{'<main>'}</span>{' '}
        element should be unique to the document. It should not contain any
        content that is repeated across documents such as sidebars, navigation
        links, copyright information, site logos, and search forms.
      </p>
      <p>
        There must not be more than one{' '}
        <span className="primary-color">{'<main>'}</span> element in a document.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<main>
  <h1>Web Browsers</h1>
  <p>Google Chrome, Firefox, and Internet Explorer are the most used browsers today.</p>

  <article>
    <h1>Google Chrome</h1>
    <p>Google Chrome is a free, open-source web browser developed by Google,
    released in 2008.</p>
  </article>

  <article>
    <h1>Internet Explorer</h1>
    <p>Internet Explorer is a free web browser from Microsoft, released in 1995.</p>
  </article>

  <article>
    <h1>Mozilla Firefox</h1>
    <p>Firefox is a free, open-source web browser from Mozilla, released in 2004.</p>
  </article>
</main>
      `}
      </Highlight>
    </>
  );
};

export default main;
