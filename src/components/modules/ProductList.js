import React from "react";
import TertiaryHeading from "../layout/headings/TertiaryHeading";
import TertiatyHeading from "../layout/headings/TertiaryHeading";

export default function ProductList({ products }) {
  return (
    console.log(products),
    (
      <div className="d-flex border bg-white">
        {products.map((item) => (
          <div key={item.title}>
            <img src={item.img} alt="product" className="w-100" />
            <TertiaryHeading title={item.title} />
            <p>{item.price}</p>
            <p className="text-success">På nettlager ({item.inStore}+)</p>
          </div>
        ))}
      </div>
    )
  );
}
