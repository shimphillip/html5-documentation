import Head from 'next/head';
import { NextPage } from 'next';
import Highlight from 'react-highlight';
import { useRouter } from 'next/router';
import { capitalize } from '../utils';

const time: NextPage = () => {
  const { pathname } = useRouter();
  const name = capitalize(pathname.slice(1));

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <h2>{name}</h2>
      <p>
        The <span className="primary-color">{'<time>'}</span> tag defines a
        human-readable date/time.
      </p>

      <p>
        This element can also be used to encode dates and times in a
        machine-readable way so that user agents can offer to add birthday
        reminders or scheduled events to the user's calendar, and search engines
        can produce smarter search results.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<p>We open at <time>10:00</time> every morning.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>
      `}
      </Highlight>
    </>
  );
};

export default time;
