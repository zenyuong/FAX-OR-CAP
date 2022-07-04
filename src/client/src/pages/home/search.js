import React from "react";

// BOOTSTRAP IMPORTS 
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORT CSS
import './search.css'

function Search() {
    return (  
        <Container fluid className="row w-100 d-flex align-items-center justify-content-center main-container">
            <Container fluid>
                <Row>
                    <Col xl={12} className='d-flex justify-content-center'>
                        <h1 className="floating main-text text">Fax or Cap?</h1>
                    </Col>

                    <Col xl={12}>
                    <p className='subText text d-flex justify-content-center'>Validate your news in seconds</p>
                    </Col>

                    <Col xl={12}>
                        <div className="input-group mb-3 searchBar">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                    className="bi bi-link" viewBox="0 0 16 16">
                                    <path
                                        d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                    <path
                                        d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                                </svg>
                            </span>
                            <input type="text" className="form-control" placeholder="Enter URL here: https://www.google.com/"
                                aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </Col>

                    <Col xl={12}>
                    <div className="col-12 d-flex justify-content-center" id="submit-btn">
                        <button type="button" className="btn btn-light rounded-pill">Check Validity</button>
                    </div>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

export default Search;