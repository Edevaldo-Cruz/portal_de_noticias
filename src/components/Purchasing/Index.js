import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

function Purchasing() {
  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Compras</h1>
      </div>
      <div className="row d-flex justify-content-between">
        <SpecialCard />
        <SpecialCard />
        <ContainerCard />
        <ContainerCard />
      </div>
      <hr />
    </>
  );
}

export default Purchasing;
