import React from "react";
import SpecialCard from "../SpecialCard/Index";

function Index() {
  return (
    <>
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
