import React, { Component } from 'react';
import './App.css';
import {Paper, FloatingActionButton, TimePicker, Dialog,
        FlatButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import OptionsBar from './OptionsBar'
import AlarmCard from './AlarmCard'

class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {alarmArray: [], shouldAlert: false}
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.alarmLogic(), 1000);
  }

  alarmLogic = () => {
    if(!this.state.shouldAlert) {
      let alarmArray = this.state.alarmArray;
      let alertIndex = null;
      let shouldAlert = alarmArray.some((alarm, index, array) => {
        if(alarm.time === new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})) {
          alertIndex = index;
        }
        return(alarm.time === new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true}) && alarm.status === 'on')
      });

      if(shouldAlert) {
        console.log('ALARM!!!');
        this.setState({shouldAlert: true, alertIndex: alertIndex})
      }
    }
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

  handleClose = () => {
    let alarmArray = this.state.alarmArray;
    alarmArray[this.state.alertIndex].status = 'off';
    this.setState({alarmArray: alarmArray, shouldAlert: false, alertIndex: null});
  };

  render() {
    console.log('state in Alarm is: ', this.state)
    const actions = [
      <FlatButton
        label="Snooze"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Stop"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    let AlarmCards = this.state.alarmArray.map((alarm) => <AlarmCard key={alarm.time.toString()} alarm={alarm}/>)
    return (
      <div className='stage-holder'>
        <Paper className='stage' zDepth={5} >
          <OptionsBar />
          {AlarmCards}
          <FloatingActionButton className='add-btn' onClick={this.handleAddClick} secondary={true}>
            <ContentAdd />
          </FloatingActionButton>
          <TimePicker
            className='timepicker'
           format="ampm"
           onChange={this.handleChangeTimePicker12}
           ref='tp'
          />
          <Dialog
            title={"ALARM!!!"}
            actions={actions}
            modal={true}
            open={this.state.shouldAlert}
            onRequestClose={this.handleClose}
          />
        </Paper>
      </div>
    )
  }
}

export default Alarm;
