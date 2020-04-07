import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const figcaption: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<figcaption>'}</span> tag defines
        a caption for a <span className="primary-color">{'<figure>'}</span>{' '}
        element.
      </p>
      <p>
        The <span className="primary-color">{'<figcaption>'}</span> element can
        be placed as the first or last child of the{' '}
        <span className="primary-color">{'<figure>'}</span> element.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
    `}
      </Highlight>
    </>
  );
};

export default figcaption;
