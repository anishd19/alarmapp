import React, { Component } from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Paper} from 'material-ui';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Alarm />
        </div>
      </MuiThemeProvider>
    );
  }
}

class Alarm extends Component {
  render() {
    return (
      <div className='stage-holder'>
        <Paper className='stage' zDepth={5} >
          <h2>Hello world</h2>
        </Paper>
      </div>
    );
  }
}

export default App;
