import React from "react";
import Button from "material-ui/Button";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import red from "material-ui/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Title
              </Typography>
            </Toolbar>
          </AppBar>
          <h1>My React App</h1>
          <Button variant="raised" color="secondary">
            Hello World
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
