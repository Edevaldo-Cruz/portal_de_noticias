import React, { Component } from "react";
import SpecialCard from "../SpecialCard/Index";
import ContainerCard from "../ContainerCard/Index";

export class TopNews extends Component {
  render() {
    return (
      <>
        <div className="row d-flex justify-content-between">
          <SpecialCard />
          <ContainerCard />
          <ContainerCard />
          <ContainerCard />
        </div>
        <hr />
      </>
    );
  }
}

export default TopNews;
