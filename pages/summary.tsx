import { NextPage } from 'next';
import Highlight from "react-highlight";

const summary: NextPage = () => {
  return (
    <>
      <h2>Summary</h2>
      <p>
        The <span className="primary-color">{"<summary>"}</span> tag defines a
        visible heading for the{" "}
        <span className="primary-color">{"<details>"}</span> element. The
        heading can be clicked to view/hide the details.
      </p>
      <h3>Example</h3>
      <Highlight className="html">
        {`
<details>
  <summary>Copyright 1999-2014.</summary>
  <p> - by Refsnes Data. All Rights Reserved.</p>
  <p>All content and graphics on this web site are the property of the company Refsnes Data.</p>
</details>
    
      `}
      </Highlight>
    </>
  );
};

export default summary;
