import React, { Component } from 'react';

import { CARDIMAGES } from '../shared/cardimages'
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Sport from './SportComponent';
import Baseball from './BaseballComponent';
import CardLaunch from './CardLaunchComponent';
import { SPORTSCARDS } from '../shared/sportscards';
import { BASEBALLINFO } from '../shared/baseballleagueinfo';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {

        const HomePage = () => <Home />

        // const SportsWithId = ({match}) => {
        //     return(
        //         <CardLaunch sportscard={this.state.sportscard.filter(sportscard => sportscard.id === 
        //             +match.params.sportId)[0]}/>
                           
        //     )
            
        // }

       

        return(
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/sport' component={Sport} />
                        <Route exact path='/Baseball' component={Baseball} />
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;