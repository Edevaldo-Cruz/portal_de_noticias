import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

function Popular() {
  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Mais Popular</h1>
      </div>
      {/* <div className="row d-flex justify-content-between">
        <SpecialCard />
        <ContainerCard />
        <ContainerCard />
        <SpecialCard />
      </div> */}
      <hr />
    </>
  );
}

export default Popular;
