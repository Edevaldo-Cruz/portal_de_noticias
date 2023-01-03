import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

function Purchasing() {
  return (
    <>
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
