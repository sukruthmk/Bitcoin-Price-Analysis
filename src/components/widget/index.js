import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { INR } from "../../core/enum/currency";
import Chart from "./chart";
import Summary from "./summary";
import { MainContainer } from "../../core/framework/layout";

const Widget = ({ range, setStartDate, setEndDate, setRange }) => {
  const [currency, setCurrency] = React.useState(INR);
  return (
    <MainContainer border="1px solid #8c8c8c">
      <Container>
        <Row>
          <Col>
            <Summary currency={currency} setCurrency={setCurrency} />
          </Col>
          <Col>
            <Chart
              currency={currency}
              range={range}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setRange={setRange}
            />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Widget;
