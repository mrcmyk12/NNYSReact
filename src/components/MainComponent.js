import React, { Component } from 'react';

import { CARDIMAGES } from '../shared/cardimages'
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Sport from './SportComponent';


import { SPORTSCARDS } from '../shared/sportcards';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
           sportscards: SPORTSCARDS
        }
    }

    render() {

        const HomePage = () => <Home />

       

        return(
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/sport' render={()=><Sport sportscards={this.state.sportscards} />} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;