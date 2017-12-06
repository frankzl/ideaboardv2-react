import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from "./components/Layout/Layout";
import ItemBlock from "./components/ItemBlock/ItemBlock";
import Idea from "./models/Idea";
import Item from "./models/Item";
import Survey from "./models/IdeaBody/Survey";
import Comments from "./models/IdeaBody/Comments";

class App extends Component {
    render() {

        const itemList = [
            new Item( new Idea('Title 1', 'Frank', 'halleluja ipsum', new Date()),
                [
                    new Survey( [new Option('A', 5), new Option('B', 3), new Option('C', 2)], 3 ),
                    new Comments([], 0)
                ]
            ),
            new Item( new Idea('Title 2', 'Joe', 'confusion confucius ipsum', new Date()),
                [
                    new Survey( [new Option('C', 5), new Option('B', 3), new Option('A', 2)], 5 ),
                    new Comments([], 0)
                ]
            )
        ]
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
