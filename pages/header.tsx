import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const header: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<header>'}</span> element
        represents a container for introductory content or a set of navigational
        links.
      </p>
      <p>
        You can have several <span className="primary-color">{'<header>'}</span>{' '}
        elements in one document.
      </p>
      <p>
        A <span className="primary-color">{'<header>'}</span> element typically
        contains:
      </p>
      <ol>
        <li>One or more heading elements (h1 - h6)</li>
        <li>Logo or icon</li>
        <li>Authorship information</li>
      </ol>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<article>
  <header>
    <h1>Most important heading here</h1>
    <h3>Less important heading here</h3>
    <p>Some additional information here</p>
  </header>
  <p>Lorem Ipsum dolor set amet....</p>
</article>
      `}
      </Highlight>
    </>
  );
};

export default header;
