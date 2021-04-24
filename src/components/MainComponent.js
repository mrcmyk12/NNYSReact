import React, { Component } from 'react';

import { CARDIMAGES } from '../shared/cardimages'
import Header from './HeaderComponent';
import Home from './HomeComponent';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardimages: CARDIMAGES
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Home cardimage={this.state.cardimages}/>
            </div>
        )
    }
}

export default Main;