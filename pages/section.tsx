import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const section: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<section>'}</span> tag defines
        sections in a document, such as chapters, headers, footers, or any other
        sections of the document.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
      `}
      </Highlight>
    </>
  );
};

export default section;
