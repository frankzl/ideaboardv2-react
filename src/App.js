import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from "./components/Layout/Layout";
import ItemBlock from "./components/ItemBlock/ItemBlock";
import Idea from "./models/Idea";

class App extends Component {
    render() {

        const ideaList = [
            new Idea('Title 1', 'Frank', 'halleluja ipsum', new Date()),
            new Idea('Whyis 2', 'Buyo', 'halleluja ipsum', new Date()),
            new Idea('Tree r2', 'Lu', 'halleluja ipsum', new Date())]

        return (
            <MuiThemeProvider>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      rel="stylesheet"/>
                <div className="App">
                    <Layout>
                        <ItemBlock items={ideaList}/>
                    </Layout>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
