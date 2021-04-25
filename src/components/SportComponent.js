import React, { Component } from 'react';




import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function Sport (props) {
 
    const sport = props.sportscards.map(sportscard => {
             return(
                    <div className='col-md-2'>
                        <Card className='sport_card'>
                                <CardImg className='sport_card_image'src= {sportscard.image}></CardImg>
                        </Card>
                        <h5 className='card_title'>{sportscard.name}</h5>
                    </div>
             )
         })

         return(
             <div className='row'>
                 {sport}
             </div>
         )
     
 
}

export default Sport;