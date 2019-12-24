import React from "react";
import ViewEmployee from "./ViewEmployee";
import "./index.css";
import SkillEmployee from "./skill";

interface IDashboard {
  selectedOption: string;
  isSkill: boolean;
  isEmp: boolean;
}
class Dashboard extends React.Component<{}, IDashboard> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: "",
      isSkill: false,
      isEmp: true
    };
  }

  handleOptionChange = (event: any) => {
    this.setState({
      isSkill: event.target.value === "Employee" ? false : true,
      isEmp: event.target.value === "Employee" ? true : false
    });
  };

  render() {
    return (
      <div>
        <div className="radio_button">
          <label className="radio-inline">
            <input
              type="radio"
              name="optradio"
              value="Employee"
              checked={this.state.isEmp}
              onChange={this.handleOptionChange}
            />
            Employee
          </label>
          <label className="radio-inline">
            <input
              type="radio"
              name="optradio"
              value="Skill"
              checked={this.state.isSkill}
              onChange={this.handleOptionChange}
            />
            Skill
          </label>
        </div>
        {this.state.isSkill ? <SkillEmployee /> : <ViewEmployee />}
      </div>
    );
  }
}

export default Dashboard;
