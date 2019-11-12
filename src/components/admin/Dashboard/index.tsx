import React from 'react';
import ViewEmployee from './ViewEmployee';
import './index.css';

const Dashboard = () => {
 return (
    <div>
      <div className="radio_button">
        <label className="radio-inline">
          <input type="radio" name="optradio" checked />Employee
    </label>
        <label className="radio-inline">
          <input type="radio" name="optradio" />Skill
    </label>
      </div>
      <ViewEmployee />
    </div>
  );
};
export default Dashboard;

