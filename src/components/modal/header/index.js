import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";

import userImage from './../../../assets/userImage.jpg';
import './header.css';

const Header = () => {
    return (
            <Container className="container">
                <Row className="d-flex justify-content-between ">
                    <Col lg="5" className="d-flex justify-content-start">
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                alt="..."
                                className="rounded-circle imageWidth"
                                src={userImage}
                            />
                        </div>
                        <div className="ml-3">
                            <h4 className="m-0">Marian Aleppo</h4>
                            <p className="text-muted m-0">Email:&nbsp;<a href='email:Marianale@gmail.com'>Marianale@gmail.com</a></p>
                            <p className="text-muted m-0">Applied via linkedin portal, 24 June 2020</p>
                            <p className="text-muted m-0">Avg Rating:</p>
                        </div>
                    </Col>
                    <Col lg="7" className="d-flex justify-content-start align-items-center">
                        <h6 className="text-muted px-3 py-1 rounded border">AI Percantage: <span className='font-weight-bold px-1 color'>75%</span></h6>
                    </Col>
                </Row>
            </Container>
    );
}

export default Header;