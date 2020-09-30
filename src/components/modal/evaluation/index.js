import React from "react";
import {
    Container,
    Row
} from "reactstrap";

import './evaluation.css';

const Evaluation = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-between pb-5">
                <div style={{ textAlign: "center" }}>
                    <h1>Evaluation Tab</h1>
                </div>
            </Row>
        </Container>
    );
}

export default Evaluation;