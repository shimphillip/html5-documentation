import { NextPage } from 'next';
import Highlight from "react-highlight";

const figure: NextPage = () => {
  return (
    <>
      <h2>Figure</h2>
      <p>
        The <span className="primary-color">{"<figure>"}</span> tag specifies
        self-contained content, like illustrations, diagrams, photos, code
        listings, etc.
      </p>
      <p>
        While the content of the{" "}
        <span className="primary-color">{"<figure>"}</span> element is related
        to the main flow, its position is independent of the main flow, and if
        removed it should not affect the flow of the document.
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

export default figure;
