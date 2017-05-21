import React, { Component } from 'react';
import './App.css';
import {Paper, FloatingActionButton, TimePicker} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import OptionsBar from './OptionsBar'
import AlarmCard from './AlarmCard'

class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {alarmArray: []}
  }

  handleChangeTimePicker12 = (event, date) => {
    console.log('date is: ', date);
    let alarmArray = this.state.alarmArray
    alarmArray.push({
      time: date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}),
      period: 'once',
      status: 'on'
    })
    this.setState({alarmArray: alarmArray});
  };

  handleAddClick = () => {
    this.refs.tp.openDialog()
  };

  render() {
    console.log('state in Alarm is: ', this.state)
    return (
      <div className='stage-holder'>
        <Paper className='stage' zDepth={5} >
          <OptionsBar />
          <AlarmCard />
          <FloatingActionButton className='add-btn' onClick={this.handleAddClick} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
          <TimePicker
            className='timepicker'
           format="ampm"
           onChange={this.handleChangeTimePicker12}
           ref='tp'
          />
        </Paper>
      </div>
    )
  }
}

export default Alarm;
