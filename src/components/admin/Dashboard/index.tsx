import React from 'react';
import ViewEmployee from './ViewEmployee'
import './index.css';
import SkillEmployee from './skill';

interface IDashboard {
  selectedOption: string;
  isSkillEmployee: boolean;

}

class Dashboard extends React.Component<{}, IDashboard> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedOption: '',
      isSkillEmployee: false
    }
  }
  handleOptionChange = (e: any) => {
    if (this.state.selectedOption === "Employee") {
      this.setState({
        isSkillEmployee: false
      });
    }
    else {
      this.setState({
        isSkillEmployee: true
      });
    }
  }
  render() {
    return (
      <div>
        <div className="radio_button">
          <label className="radio-inline">
            <input type="radio"
              name="optradio"
              value=" Employee"
              checked={this.state.selectedOption === "Employee"}
              onChange={this.handleOptionChange}
            />Employee
    </label>
          <label className="radio-inline">
            <input type="radio"
              name="optradio"
              value=" Skill"
              checked={this.state.selectedOption === "Skill"}
              onChange={this.handleOptionChange}
            />Skill
    </label>
        </div>
        {this.state.isSkillEmployee ?
          <SkillEmployee /> : <ViewEmployee />
        }

      </div>
    )
  }
}

export default Dashboard;

