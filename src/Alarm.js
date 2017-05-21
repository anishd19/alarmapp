import React, { Component } from 'react';
import './App.css';
import {Paper} from 'material-ui';
import OptionsBar from './OptionsBar'

class Alarm extends Component {
  render() {
    return (
      <div className='stage-holder'>
        <Paper className='stage' zDepth={5} >
          <OptionsBar />
        </Paper>
      </div>
    )
  }
}

export default Alarm;
