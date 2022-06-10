import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../data/api";
import MainHeading from "../layout/headings/MainHeading";

function ProductPage() {
  const [pictureIndex, setPictureIndex] = useState(0);
  const { id } = useParams("/");

  return (
    <div>
      <p>All &gt; Blodtrykksmåler</p>
      <MainHeading title={api[id].title} />
    </div>
  );
}

export default ProductPage;
