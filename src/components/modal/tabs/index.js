import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import classnames from 'classnames'

import Evaluation from './../evaluation'
import VideoAssessment from './../videoAssessment'

import './tabs.css';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink onClick={() => { toggle('1'); }} className={classnames({ active: activeTab === '1' })} >
                        Video
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('2'); }} className={classnames({ active: activeTab === '2' })} >
                        Summary
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('3'); }} className={classnames({ active: activeTab === '3' })} >
                        Attachments
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('4'); }} className={classnames({ active: activeTab === '4' })} >
                        Evaluation
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('5'); }} className={classnames({ active: activeTab === '5' })} >
                        Questionnaire
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={() => { toggle('6'); }} className={classnames({ active: activeTab === '6' })} >
                        Video Assessment
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div style={{ textAlign: "center" }}>
                                <h1>Vidoe Tab</h1>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <div style={{ textAlign: "center" }}>
                                <h1>Summary Tab</h1>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Col sm="12">
                            <div style={{ textAlign: "center" }}>
                                <h1>Attachments Tab</h1>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <Col sm="12">
                            <Evaluation />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>
                        <Col sm="12">
                            <div style={{ textAlign: "center" }}>
                                <h1>Questionnaire Tab</h1>
                            </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="6">
                    <Row>
                        <Col sm="12">
                            <VideoAssessment />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </>
    );
}

export default Tabs;