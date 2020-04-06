import { NextPage } from 'next';
import Highlight from "react-highlight";

const time: NextPage = () => {
  return (
    <>
      <h2>Time</h2>
      <p>
        The <span className="primary-color">{"<time>"}</span> tag defines a
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
