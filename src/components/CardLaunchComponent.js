import React from 'react';


import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';


// const id = [];
// const name = [];
// const image = [];
// const registration = [];
// const required = [];
// const rules = [];
// const description = [];
// const length = id.length;
// let i = 0;


// function putIntoArray(sportscard) {
    
//     sportscard.leagueinfo.map(() => {
//         while(i < sportscard.leagueinfo.length){
//         description.push(sportscard.leagueinfo[i].description);
//         id.push(sportscard.leagueinfo[i].id);
//         image.push(sportscard.leagueinfo[i].image);
//         registration.push(sportscard.leagueinfo[i].registration);
//         required.push(sportscard.leagueinfo[i].required);
//         rules.push(sportscard.leagueinfo[i].rules);
//         name.push(sportscard.leagueinfo[i].name);
        
//           i++;
//         }
//     })
// }

// function DisplayArray (sportscard) {

//     putIntoArray(sportscard);
    
//     for(let j=0;j<description.length;j++)
//         {
//             return(
//         <React.Fragment>
//             <Card className='col-3 m-1'>
//                 <CardImg className='mt-1' src={image[i]}/>
//                 <CardBody>
//                     <CardText>
//                     {description[i]}
//                     </CardText>
//                 </CardBody>
//             </Card>
        
//         </React.Fragment>
//         )}
//          }  
        
 
    



// // function RenderCard (sportscard) {
// //     while(j < description.length){
        
// //         return(
// //         <React.Fragment>
// //             <Card className='col-3 m-1'>
// //                 <CardImg className='mt-1' src={image[j]}/>
// //                 <CardBody>
// //                     <CardText>
// //                     {description[j]}
// //                     </CardText>
// //                 </CardBody>
// //             </Card>
        
// //         </React.Fragment>
// //         )
// //          j++;   
// //         }
// //         console.log(description)
    
// // }

// // function LeagueInfoRender (sportscard) {
    
// //     sportscard.leagueinfo.map(() => {
// //         while(i < sportscard.leagueinfo.length){
// //         description.push(sportscard.leagueinfo[i].description);
// //         id.push(sportscard.leagueinfo[i].id);
// //         image.push(sportscard.leagueinfo[i].image);
// //         registration.push(sportscard.leagueinfo[i].registration);
// //         required.push(sportscard.leagueinfo[i].required);
// //         rules.push(sportscard.leagueinfo[i].rules);
// //         name.push(sportscard.leagueinfo[i].name);
        
// //           i++;
// //         }
// //     })
// //     console.log(description.length)
// //     console.log(description)

// //     return(<RenderCard />)
   
//     // return(
//     //     <div className="container">
//     //     <div className='row'>
            
//     //             {card}  
                    
//     //     </div>
//     //     </div>
//     // );
//     //}

// function CardLaunch({sportscard}) {
    
//       return(
//         <div className='row' key={sportscard.id}>
//             <DisplayArray sportscard={sportscard}/>
//         </div>
//         )
    
// }

function CardLaunch (sportscard) {
    
        return(
            <div key={sportscard.id}>
               
            </div>
        )
    
}


export default CardLaunch;