import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

function Popular() {
  return (
    <>
      <div className="row d-flex justify-content-between">
        <SpecialCard />
        <ContainerCard />
        <ContainerCard />
        <SpecialCard />
      </div>
      <hr />
    </>
  );
}

export default Popular;
