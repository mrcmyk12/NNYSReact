import React, { Component } from 'react';

import { CARDIMAGES } from '../shared/cardimages'
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Sport from './SportComponent';
import Baseball from './BaseballComponent';
import Football from './FootballComponent';
import Soccer from './SoccerComponent';
import Basketball from './BasketballComponent';
import Cheerleader from './CheerleadingComponent';
import FlagFootball from './FlagFootballComponent';
import Volleyball from './VolleyballComponent';
import Schedule from './ScheduleComponent';
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
                        <Route exact path='/Tackle-Football' component={Football} />
                        <Route exact path='/Soccer' component={Soccer} />
                        <Route exact path='/Basketball' component={Basketball} />
                        <Route exact path='/Cheerleading' component={Cheerleader} />
                        <Route exact path='/Flag-Football' component={FlagFootball} />
                        <Route exact path='/Flag-Football' component={FlagFootball} />
                        <Route exact path='/schedule' component={Schedule} />
                        <Redirect to='/home' />
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;