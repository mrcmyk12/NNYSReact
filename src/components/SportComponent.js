import React, { Component } from 'react';

import { Card, CardImg, CardFooter, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { SPORTSCARDS } from '../shared/sportscards';

import { Link } from 'react-router-dom';


class Sport extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            
            sportscards:SPORTSCARDS,

        };
        
    }

    
    

    render() {

        const sport = this.state.sportscards.map(sportscard => {
            return(
                    <React.Fragment>
                        <div className='col-md-2'>
                            <Link to={`/${sportscard.name}`}>
                            <Card key={sportscard.id} className='sport_card mb-2'>
                                    <CardImg className='sport_card_image'src= {sportscard.image}></CardImg>
                            </Card>
                            <h5 className='card_title'>{sportscard.name}</h5>
                            </Link>
                        </div>
                    </React.Fragment>
            )
        })

        return (
            <div className='row'>
                {sport}
            </div>        
            
        )
    }
}
    
     
 


export default Sport;