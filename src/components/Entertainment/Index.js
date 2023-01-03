import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

function Entertainment() {
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

export default Entertainment;
