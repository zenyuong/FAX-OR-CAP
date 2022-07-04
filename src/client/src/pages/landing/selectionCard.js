import React from 'react';


// BOOTSTRAP IMPORTS 
import {Button, Card, Nav, Navbar, NavDropdown, Offcanvas, Form, Container, OffcanvasHeader, OffcanvasTitle, OffcanvasBody, NavbarBrand, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// IMPORT CSS
import './selectionCard.css';


function SelectionCard(props) {    
    return ( 
        <Container fluid className='main-container'>
            <Row className='h-75'>
                <Col className='d-flex justify-content-center rounded-3'>
                    <Card className='bg-dark text-white twitter-card rounded-3'>
                        <Card.Img src={props.value.img} alt='Card image' className='twitter-img h-100'/>
                        <Card.ImgOverlay>
                            <Card.Title className='d-flex justify-content-center card-text card-text-top'>{props.value.title}</Card.Title>
                            <Card.Text className='d-flex justify-content-center card-text card-text-btm'>
                                {props.value.subtext}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>

        </Container>
     );
}

export default SelectionCard;