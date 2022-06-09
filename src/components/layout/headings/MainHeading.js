import React from "react";

export default function MainHeading({ title }) {
  return (
    <h2 style={{ color: "#808080", fontSize: "40px", fontWeight: "600" }}>
      {title}
    </h2>
  );
}
