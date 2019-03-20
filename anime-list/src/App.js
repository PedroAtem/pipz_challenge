import React, { Component } from 'react';
import './App.scss';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default class App extends Component {
  state = {
    theme: createMuiTheme({
      palette: {
        type: 'dark',
      },
    })
  }

  darkTheme = () => {
    console.log(this.state.theme);
    this.setState({
      theme: createMuiTheme({
        palette: {
          type: 'dark',
        },
      })
    })
  }

  lightTheme = () => {
    this.setState({
      theme: createMuiTheme({
        palette: {
          type: 'light',
        },
      })
    })
  }

  render() {
    const { theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Card className="app-content">
            <Button variant="contained" onClick={this.darkTheme}>Dark</Button>
            <Button variant="contained" onClick={this.lightTheme}>Light</Button>
            <br></br><br></br>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">Primary</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="secondary" disabled>Disabled</Button>
            <Button variant="contained" href="#contained-buttons">Link</Button>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}