import { NextPage } from 'next';
import Highlight from "react-highlight";

const aside: NextPage = () => {
  return (
    <>
      <h2>Aside</h2>
      <p>
        The <span className="primary-color">{"<aside>"}</span> defines some
        content aside from the content it is placed in (like a sidebar)
      </p>

      <p>
        The <span className="primary-color">{"<aside>"}</span> content should be
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
