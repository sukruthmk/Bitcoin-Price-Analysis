import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Chart from "./chart";
import Summary from "./summary";
import { MainContainer, SubText } from "../../core/framework/layout";

const Widget = () => {
  return (
    <MainContainer border="1px solid #8c8c8c">
      <Container>
        <Row>
          <Col>
            <SubText>1 Bitcoin equals</SubText>
          </Col>
        </Row>
        <Row>
          <Col>
            <Summary />
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
