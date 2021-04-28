import React, { Component } from 'react';

import { Card, CardTitle, CardImg, CardHeader, CardFooter, CardBody, Button } from 'reactstrap';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';
import { BASEBALLINFO } from '../shared/baseballleagueinfo'


class Baseball extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            baseballs:BASEBALLINFO,
            
        };
        
    }



    render() {

 
            
            
        

        const base = this.state.baseballs.map(baseball => {
            return(
                    <React.Fragment>
                        <div className="col-md-6 m-2 sport_card">
                            <Card>
                                <CardImg className='image_for_sport'src={baseball.image}></CardImg>
                                <CardImgOverlay ><h3 className='sport_card_title'>{baseball.name}</h3></CardImgOverlay>
                                 <CardBody className='body_description'>{baseball.description}</CardBody>
                            </Card>
                        </div>
                        <div className="col-md-4 m-1">
                            <Card className='sport_card'>
                                <CardBody>
                                    <h6 className='rules_title'>Registration Includes</h6>
                                        <p className='rules_paragraph'>{baseball.registration}</p>
                                    <h6 className='rules_title'>Required Equipment</h6>
                                    {baseball.requiredeq.map(eq => 
                                    <li className='rules_list'>
                                        {eq}                           
                                    </li>)}
                                    <h6 className='rules_title'>Rules</h6>
                                    {baseball.rules.map(rules => 
                                    <li className='rules_list'>                     
                                        {rules} 
                                    </li>)}
                                    <Button className='register_button'>Sign-Up</Button>
                                </CardBody>
                                
                            </Card>
                        </div>
                    </React.Fragment>
            )
        })

        return (
            
                <div className="row">
                    {base}
                </div>
                
               
            
        )
    }
}

export default Baseball;