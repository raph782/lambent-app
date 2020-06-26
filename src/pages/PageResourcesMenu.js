import React, { Component } from "react";
import resourcesHealth from "../icons/resourcesHealth.png";
import resourcesEducation from "../icons/resourcesEducation.png";
import resourcesJobs from "../icons/resourcesJobs.png";
import resourcesSupport from "../icons/resourcesSupport.png";

class PageResourcesMenu extends Component {
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
          Resources
        </div>
        <table className="resource-container">
          <tr>
            <td>
              <div>Health</div>
              <img src={resourcesHealth} />
            </td>
            <td>
              <div>Education</div>
              <img src={resourcesEducation} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Jobs</div>
              <img src={resourcesJobs} />
            </td>
            <td>
              <div>Support</div>
              <img src={resourcesSupport} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default PageResourcesMenu;
