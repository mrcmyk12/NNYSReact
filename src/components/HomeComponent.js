import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';

import { CARDIMAGES } from '../shared/cardimages';



function RenderImage() {
    return (
        <div className='container'>
            <Card inverse>
                <CardImg top width='100%' src='/assets/images/soccer.jpg' alt='National Youth Sports Nevada'/>
            </Card>
        </div>
    )
}

function RenderCard() {
    return (
        <div className="container">
            <Card>
                <CardImg className='homeimage' width='50%' src='assets/images/logo.png' />
                <CardBody>
                    <CardTitle tag='h4'>Welcome to National Youth Sports Nevada</CardTitle>
                    <CardText>
                    <p className = 'welcome-paragraph'>Give your child the gift of sports.  Create lasting memories 
                    while watching your child set the foundations they'll carry with them for the rest of their lives.  At NYS,
                    we believe your childs growth is paramount.  And with leagues from Beginner to All-Star, there's a place
                    for everyone.  So from ages young to old, lace them up and get out and compete.  We  can growth
                    with you child and help equip them with the skills needed in life. Instill in your kids a will to
                    succeed in a supportive and safe environment.<strong> NYS, Where Kid's Have a Ball.</strong></p>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

class Home extends Component {


    render () {
        return (
            <div className="container img-container">
                <div className="row">
                    <div className="col-sm-4">
                        <RenderImage /> 
                    </div>
                    <div className="col-sm-8">
                        <RenderCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;