import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

import { EUR, INR, USD } from "../../core/enum/currency";
import Chart from "./chart";
import Summary from "./summary";
import { MainContainer, SubText } from "../../core/framework/layout";

const Widget = () => {
  return (
    <MainContainer border="1px solid #8c8c8c">
      <Container>
        <Row>
          <Col>
            <Summary/>
          </Col>
          <Col>
            <Chart />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Widget;
