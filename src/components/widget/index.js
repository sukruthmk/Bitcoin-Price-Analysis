import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { INR } from "../../core/enum/currency";
import Chart from "./chart";
import { ONE_MONTH } from "../../core/enum/dateRanges";
import Summary from "./summary";
import { MainContainer } from "../../core/framework/layout";

const Widget = () => {
  const [currency, setCurrency] = React.useState(INR);
  const [chartData, setChartData] = React.useState({});
  const [range, setRange] = React.useState(ONE_MONTH);
  return (
    <MainContainer border="1px solid #8c8c8c">
      <Container>
        <Row>
          <Col>
            <Summary currency={currency} setCurrency={setCurrency} />
          </Col>
          <Col>
            <Chart
              chartData={chartData}
              currency={currency}
              range={range}
              setChartData={setChartData}
              setRange={setRange}
            />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Widget;
