import React from "react";
import SpecialCard from "../SpecialCard/Index";

function Index() {
  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#000",
        }}
      >
        <h1>Ofertas</h1>
      </div>
      <div className="row d-flex justify-content-between">
        <SpecialCard />
        <SpecialCard />
        <SpecialCard />
        <SpecialCard />
      </div>
      <hr />
    </>
  );
}

export default Index;
