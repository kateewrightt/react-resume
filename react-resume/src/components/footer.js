import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../stylesheets/layout.css";
import "../stylesheets/design.css";

function Footer() {
  return (
    <MDBFooter>
      <section className="footerLocation">
        <p>
          <h5>
            <b>Kate Wright</b>
          </h5>
          <i>
            wrighk@outlook.com
            <br></br>0466 833 088
          </i>
        </p>
      </section>
    </MDBFooter>
  );
}
export default Footer;
