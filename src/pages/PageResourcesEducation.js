import React, { Component } from "react";
import "../components.css";

import resourcesEducationFinances from "../icons/resourcesEducationFinances.png";

class PageResourcesEducation extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div
          style={{
            width: "100%",
            height: "auto",
            // border: "3px solid black",
            textAlign: "center",
            fontSize: "2em",
            textDecoration: "underline",
          }}
        >
          Education
        </div>
        <table className="resource-container">
          <tr>
            <td>
              <div>Finances</div>

              <img src={resourcesEducationFinances} />
            </td>
            <td>
              <div>Children's Learning</div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default PageResourcesEducation;
