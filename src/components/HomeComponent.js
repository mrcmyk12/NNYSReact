import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';

import { CARDIMAGES } from '../shared/cardimages';



function RenderImage() {
    return (
        <div className='container home_image'>
            <Card className='mr-2'>
                <CardImg top width='100%' src='/assets/images/soccer.jpg' alt='National Youth Sports Nevada'/>
            </Card>
        </div>
    )
}

function RenderCard() {
    return (
        <div className="container">
            <div className="row mb-5">          
                <Card className='home_card mt-5 ml-2'>
                    <div>
                        <CardImg width='100%' className='card_image' src='/assets/images/logo.png'></CardImg>
                    </div>
                    <CardBody>
                        
                        <CardText>
                        <p className = 'welcome_paragraph'>Give your child the gift of sports.  Create lasting memories 
                        while watching your child set the foundations they'll carry with them for the rest of their lives.  At NYS,
                        we believe your childs growth is paramount.  And with leagues from Beginner to All-Star, there's a place
                        for everyone.  So from ages young to old, lace them up and get out and compete.  We  can growth
                        with you child and help equip them with the skills needed in life. Instill in your kids a will to
                        succeed in a supportive and safe environment.<strong> NYS, Where Kid's Have a Ball.</strong></p>
                        </CardText>
                    </CardBody>
                </Card>
            </div>  
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