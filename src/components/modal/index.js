import React from "react";
import {
    Container,
    Row
} from "reactstrap";

import VideoAssessment from './videoAssessment'
import Evaluation from './evaluation'

import './modal.css';

const Modal = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <VideoAssessment />
                <Evaluation />
            </Row>
        </Container>
    );
}

export default Modal;