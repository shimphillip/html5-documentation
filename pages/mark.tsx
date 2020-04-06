import { NextPage } from 'next';
import Highlight from "react-highlight";

const mark: NextPage = () => {
  return (
    <>
      <h2>Mark</h2>
      <p>
        The <span className="primary-color">{"<mark>"}</span> tag defines marked
        text.
      </p>
      <p>
        Use the <span className="primary-color">{"<mark>"}</span> tag if you
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
