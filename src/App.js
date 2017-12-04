import React, {Component} from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Layout/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
