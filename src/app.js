import React, { Component } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
    Button,
    Container,
    Row
} from "reactstrap";

import MyModal from './components/modal'

import './app.css'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }
    
    toggleShow = (show) => {
        this.setState({ show });
    };
    
    render() {
        const { show } = this.state;
        return (
            <Container>
                <Row className="min-vh-100 d-flex justify-content-center align-content-center pt-5">
                    <Button  color="primary" onClick={() => this.toggleShow(true)}>Short content</Button>
                    <Modal open={show} onClose={() => this.toggleShow(false)} closeOnEsc={false}>
                        <MyModal />
                    </Modal>
                </Row>
            </Container>
        );
    }
}
export default App;