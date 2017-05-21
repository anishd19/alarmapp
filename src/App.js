import React, { Component } from 'react';
import './App.css';
import Alarm from './Alarm'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

export default App;
