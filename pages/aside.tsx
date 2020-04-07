import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const aside: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<aside>'}</span> defines some
        content aside from the content it is placed in (like a sidebar)
      </p>

      <p>
        The <span className="primary-color">{'<aside>'}</span> content should be
        related to the surrounding content.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<p>My family and I visited the Epcot center this summer.</p>

<aside>
    <h4>Epcot Center</h4>
    <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>

`}
      </Highlight>
    </>
  );
};

export default aside;
