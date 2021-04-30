import React, { Component } from 'react';
import { Card, CardImg, CardHeader, CardTitle, CardBody, Button, Modal, ModalHeader,
    ModalBody, ModalFooter } from 'reactstrap';
import RenderModal from './RenderModalComponent';

import { UNIFORM } from '../shared/orderinfo';



class Order extends Component{
    constructor(props) {
        super(props);

            this.state = {
                uniforms:UNIFORM,
                isModalOpen:false
            }
            this.toggleModal = this.toggleModal.bind(this);
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

            render() {

            const uniforms = this.state.uniforms.map((uniform)=>{
            return(
                    <React.Fragment>
                        <div className="col">
                            <Card body className='mb-5'>                                                                
                                <CardImg top width='100%' src={uniform.image}/>
                                <CardTitle className='card_title'>{uniform.name}</CardTitle>
                                <RenderModal uniform={uniform}/>                               
                            </Card>
                        </div>
                    </React.Fragment>
                )
            }
        )

            return(
                <React.Fragment>
                    <div className='row'>
                        {uniforms}
                    </div>
                    
                </React.Fragment>
            )
        }
    
}

export default Order;