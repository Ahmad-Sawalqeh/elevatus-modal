import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";

import Header from './header'
import Tabs from './tabs'
// import Controlers from './controlers'
import './modal.css';

const Modal = () => {
    return (
        <>
            <Header />
            <Container className="my-3">
                <Row>
                    <Col lg="8">
                        <Tabs />
                    </Col>
                    <Col lg="4">
                        {/* <Controlers /> */}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Modal;