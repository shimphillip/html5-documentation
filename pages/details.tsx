import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';

const details: NextPage = () => {
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <h2>Details</h2>
      <p>
        The <span className="primary-color">{'<details>'}</span> tag specifies
        additional details that the user can view or hide on demand.
      </p>
      <p>
        The <span className="primary-color">{'<details>'}</span> tag can be used
        to create an interactive widget that the user can open and close.
      </p>
      <p>
        The content of a <span className="primary-color">{'<details>'}</span>{' '}
        element should not be visible unless the open attribute is set.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
  <details>
    <summary>Copyright 1999-2018.</summary>
    <p> - by Refsnes Data. All Rights Reserved.</p>
    <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
  </details>
      `}
      </Highlight>
    </>
  );
};

export default details;
