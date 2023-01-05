import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

function Entertainment() {
  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Enterterimento</h1>
      </div>
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
