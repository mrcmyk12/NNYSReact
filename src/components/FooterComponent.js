import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        
        <footer className='site-footer'>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-2 text-wrap ml-5">
                        <ul className="list-unstyled ">
                            <li><Link to ='/home' className='footer_contact2'>Home</Link></li>
                            <li><Link to ='/sports' className='footer_contact2'>Sports</Link></li>
                            <li><Link to ='/schedule'className='footer_contact2'>Schedule</Link></li>
                            <li><Link to ='/order' className='footer_contact2'>Order</Link></li>
                        </ul>
                    </div>
                    <div className="col-3 mx-auto footer_contact">
                            <h6>Summerlin/North Las Vegas</h6>
                            <p><i className="fa fa-phone"/> 702.454.7863 (ext 2) <br/>
                            <i className="fa fa-envelope" /> lasvegas@nysnevada.com</p>
                    </div>
                    <div className="col-4 mx-auto, footer_contact">
                            <h6>Henderson/South Las vegas</h6>
                            <p><i className="fa fa-phone"/> 702.454.7863  <br/>
                            <i className="fa fa-envelope" /> henderson@nysnevada.com</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;

