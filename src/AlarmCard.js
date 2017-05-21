import React, { Component } from 'react';
import './App.css';
import {Toggle, Divider} from 'material-ui';
import KeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

class AlarmCard extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}
  }
  render() {
    const isOpen = this.state.isOpen;
    let card = null;
    const styles = {
      block: {
        maxWidth: 250,
      },
      toggle: {
        marginBottom: 16,
      },
      thumbOff: {
        backgroundColor: '#ffcccc',
      },
      trackOff: {
        backgroundColor: '#ff9d9d',
      },
      thumbSwitched: {
        backgroundColor: 'red',
      },
      trackSwitched: {
        backgroundColor: '#ff9d9d',
      },
      labelStyle: {
        color: 'red',
      },
    }
    if(isOpen) {
      card = (
        <div className='alarm-card open'>
          <div className='row'>
            <div className='time'>{this.props.alarm.time.split(' ')[0]}<span>{this.props.alarm.time.split(' ')[1]}</span></div>
            <div className='toggler'>
              <Toggle
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
                defaultToggled={this.props.alarm.status === 'on'}
              />
            </div>
          </div>
          <div className='row'>
            <div className='period'>{this.props.alarm.period}</div>
            <div className='arrow'>
              <KeyboardArrowUp className='ap-icon'/>
            </div>
          </div>
          <Divider/>
        </div>
      )
    }else {
      card = (
        <div className='alarm-card'>
          <div className='row'>
            <div className='time'>{this.props.alarm.time.split(' ')[0]}<span>{this.props.alarm.time.split(' ')[1]}</span></div>
            <div className='toggler'>
              <Toggle
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
                defaultToggled={this.props.alarm.status === 'on'}
              />
            </div>
          </div>
          <div className='row'>
            <div className='period'>{this.props.alarm.period}</div>
            <div className='arrow'>
              <KeyboardArrowDown className='ap-icon'/>
            </div>
          </div>
          <Divider/>
        </div>
      )
    }
    return (
      <div className='alarm-card-holder'>
        {card}
      </div>
    )
  }
}

export default AlarmCard;
