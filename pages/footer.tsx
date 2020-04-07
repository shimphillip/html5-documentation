import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const footer: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<footer>'}</span> tag defines a
        footer for a document or section.
      </p>
      <p>
        The <span className="primary-color">{'<footer>'}</span> element should
        contain information about its containing element.
      </p>
      <p>
        You can have several <span className="primary-color">{'<footer>'}</span>{' '}
        elements in one document.
      </p>
      <p>
        A <span className="primary-color">{'<footer>'}</span> element typically
        contains:
      </p>
      <ol>
        <li>Authorship information</li>
        <li>Copyright information</li>
        <li>Contact information</li>
        <li>Sitemap</li>
        <li>Back to top links</li>
        <li>Related documents</li>
      </ol>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
      `}
      </Highlight>
    </>
  );
};

export default footer;
