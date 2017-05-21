import React, { Component } from 'react';
import './App.css';
import {Paper, FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import OptionsBar from './OptionsBar'

class Alarm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='stage-holder'>
        <Paper className='stage' zDepth={5} >
          <OptionsBar />
        <FloatingActionButton className='add-btn' secondary={true}>
          <ContentAdd />
        </FloatingActionButton>
        </Paper>
      </div>
    )
  }
}

export default Alarm;
