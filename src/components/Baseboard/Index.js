import React from "react";
import "./Styles.css";

function Baseboard() {
  return (
    <div className="baseboard row shadow">
      <div className="col-5">
        <a href="https://www.microsoft.com/pt-br/" className="center end">
          2023 Microsoft
        </a>
      </div>
      <div className="col-5 end">
        <a
          href="http://go.microsoft.com/fwlink/?LinkId=521839"
          className="m-2 end"
        >
          Privacidade e Cookies
        </a>
        <a
          href="http://go.microsoft.com/fwlink/?LinkID=246338"
          className="m-2 end"
        >
          Termo de Uso
        </a>
        <a
          href="http://go.microsoft.com/fwlink/?LinkID=2003950"
          className="m-2 end"
        >
          Anuncie
        </a>
        <a
          href="http://go.microsoft.com/fwlink/?LinkID=2003950"
          className="m-2 end"
        >
          ...
        </a>
      </div>
      <div className="col-2"></div>
    </div>
  );
}

export default Baseboard;
