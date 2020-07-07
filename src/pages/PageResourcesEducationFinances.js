import React, { Component } from "react";
import resourcesHealth from "../icons/resourcesHealth.png";
import resourcesEducationFinancesBudgeting from "../icons/resourcesEducationFinancesBudgeting.png";
import resourcesEducationFinancesCredit from "../icons/resourcesEducationFinancesCredit.png";
import resourcesEducationFinancesFinancialGoals from "../icons/resourcesEducationFinancesFinancialGoals.png";
import resourcesJobs from "../icons/resourcesJobs.png";
import resourcesSupport from "../icons/resourcesSupport.png";
import "../components.css";

class PageResourcesEducationFinances extends Component {
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
              <div>Financial Goals</div>

              <img src={resourcesEducationFinancesFinancialGoals} />
            </td>
            <td>
              <div>Budgeting / Spending</div>
              <img src={resourcesEducationFinancesBudgeting} />
            </td>
          </tr>
          <tr>
            <td>
              <div>Credit Loans</div>
              <img src={resourcesEducationFinancesCredit} />
            </td>
            <td>
              <div>Saving</div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default PageResourcesEducationFinances;
