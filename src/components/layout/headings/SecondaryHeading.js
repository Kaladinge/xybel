import React from "react";

export default function SecondaryHeading({ title }) {
  return (
    <h3 style={{ color: "black", fontSize: "30px", fontWeight: "600" }}>
      {title}
    </h3>
  );
}
