import { NextPage } from 'next';
import Highlight from "react-highlight";

const section: NextPage = () => {
  return (
    <>
      <h2>Section</h2>
      <p>
        The <span className="primary-color">{"<section>"}</span> tag defines
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
