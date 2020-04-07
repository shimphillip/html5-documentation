import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const mark: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<mark>'}</span> tag defines marked
        text.
      </p>
      <p>
        Use the <span className="primary-color">{'<mark>'}</span> tag if you
        want to highlight parts of your text.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<p>Do not forget to buy <mark>milk</mark> today.</p>

`}
      </Highlight>
    </>
  );
};

export default mark;
