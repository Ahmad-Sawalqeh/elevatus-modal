import React, { Component } from "react";
import {
    Container,
    Row
} from "reactstrap";

import './videoAssessment.css';

const VideoAssessment = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <div style={{ textAlign: "center" }}>
                    <h1>Video Assessment Tab</h1>
                </div>
            </Row>
        </Container>
    );
}

export default VideoAssessment;
