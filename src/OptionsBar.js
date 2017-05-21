import React from 'react';
import './App.css';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
import ActionQueryBuilder from 'material-ui/svg-icons/action/query-builder';
import HourglassEmpty from 'material-ui/svg-icons/action/hourglass-empty';
import AlarmAdd from 'material-ui/svg-icons/action/alarm-add';
import {Divider} from 'material-ui';

const OptionsBar = (props) => {
  return (
    <div className='options-bar'>
      <div className='option'>
        <ActionAlarm className='ap-icon'/>
        <div className='name'>ALARM</div>
      </div>
      <div className='option'>
        <ActionQueryBuilder className='ap-icon'/>
      <div className='name'>CLOCK</div>
      </div>
      <div className='option'>
        <HourglassEmpty className='ap-icon'/>
      <div className='name'>TIMER</div>
      </div>
      <div className='option'>
        <AlarmAdd className='ap-icon'/>
      <div className='name'>STOPWATCH</div>
      </div>
      <Divider/>
    </div>
  )
}

export default OptionsBar;
