import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
const LoginDashboard = () => {
  return (
    <div>
    <Container>
    <Row>
    <Col><h1>Skills_Matrix</h1> </Col> 
      </Row>
    </Container>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Skills Matrix</h5>
        <p className="card-text">List Of skills of Employee</p>
        <a href="Skills" className="btn btn-primary">Skills</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginDashboard;