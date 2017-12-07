import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from "./components/Layout/Layout";
import ItemBlock from "./components/ItemBlock/ItemBlock";
import Idea from "./models/IdeaModel";
import Item from "./models/ItemModel";
import Survey, {Option} from "./models/IdeaBody/SurveyModel";
import Comments from "./models/IdeaBody/CommentsModel";

class App extends Component {
    render() {

        const itemList = [
            new Item( new Idea('Title 1', 'Frank', 'halleluja ipsum', new Date()),
                [
                    new Survey( [new Option('A', 2), new Option('B', 3), new Option('C', 2)], 3 ),
                    new Comments([], 0)
                ]
            ),
            new Item( new Idea('Title 2', 'Joe', 'confusion confucius ipsum', new Date()),
                [
                    new Survey( [new Option('C', 5), new Option('B', 3), new Option('A', 2)], 5 ),
                ]
            ),
            new Item( new Idea('Title 3', 'Joe', 'confusion confucius ipsum', new Date()),
                [
                    new Survey( [new Option('C', 5), new Option('B', 3), new Option('A', 2)], 5 ),
                ]
            ),
            new Item( new Idea('Title 4', 'Joe', 'confusion confucius ipsum', new Date()),
                [
                    new Survey( [new Option('C', 5), new Option('B', 3), new Option('A', 2)], 5 ),
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
                        <ItemBlock items={itemList}/>
                    </Layout>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
