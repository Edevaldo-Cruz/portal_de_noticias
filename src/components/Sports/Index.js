import React from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";
import { useAPI } from "../../hooks/useAPI";

function Sports() {
  const { itens: news } = useAPI(
    "category=sports&apiKey=9440f38accc54afdacaacd4d6c481ebe"
  );

  return (
    <>
      <div
        style={{
          borderTopStyle: "solid",
          borderTopWidth: 4,
          borderTopColor: "#1250A1",
        }}
      >
        <ul className="d-flex justify-content-between">
          <h4 style={{ color: "#1250A1" }}>Esporte</h4>
        </ul>
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

export default Sports;
