import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';

const article: NextPage = () => {
  return (
    <>
      <Head>
        <title>Article</title>
      </Head>
      <h2>Article</h2>
      <p>
        The <span className="primary-color">{'<article>'}</span> element
        specifies independent, self-contained content.
      </p>
      <p>
        An article should make sense on its own, and it should be possible to
        read it independently from the rest of the web site.
      </p>
      <p>
        Examples of where an{' '}
        <span className="primary-color">{'<article>'}</span> element can be
        used:
      </p>
      <ol>
        <li>Forum Post</li>
        <li>Blog Post</li>
        <li>Newspaper article</li>
      </ol>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.</p>
</article>
        `}
      </Highlight>
    </>
  );
};

export default article;
