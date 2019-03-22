import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Brightness2 from '@material-ui/icons/Brightness2';
import Brightness5 from '@material-ui/icons/Brightness5';
import Checkbox from '@material-ui/core/Checkbox';

import Routes from './routes';

export default class App extends Component {
  state = {
    theme: createMuiTheme({
      typography: { useNextVariants: true },
      palette: { type: 'light' }
    }),
    themeToggle: false
  }

  darkTheme = () => this.changeTheme('dark')
  lightTheme = () => this.changeTheme('light');
  changeTheme = name => event => {
    this.setState({ [name]: event.target.checked });
    this.setState({
      theme: createMuiTheme({
        typography: { useNextVariants: true },
        palette: { type: event.target.checked ? 'dark' : 'light' }
      })
    });
  }

  render() {
    const { theme } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar className="toolbar">
            <div className="space"></div>
            <FormGroup className="themeToggleForm" row>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<Brightness5 />}
                    checkedIcon={<Brightness2 />}
                    onChange={this.changeTheme('themeToggle')}
                    value="themeToggle"
                  />
                }
                label={theme.palette.type}
              />
            </FormGroup>
          </Toolbar>
        </AppBar>
        <Provider store={store}>
          <div className="app">
            <div className="app-content">
              <Routes />
            </div>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}