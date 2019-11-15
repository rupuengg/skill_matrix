import React from 'react';
import ViewEmployee from './ViewEmployee'
import './index.css';
import SkillEmployee from './skill';

const Dashboard = () => {
  const handleChange = () => {
  };

  return (
    <div>
      <div className="radio_button">
        <label className="radio-inline">
          <input type="radio" name="optradio" checked onChange={handleChange} />Employee
    </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" onChange={handleChange} />Skill
    </label>
      </div>
      <ViewEmployee />
     {/* <SkillEmployee/> */}
    </div>
  );
};
export default Dashboard;

