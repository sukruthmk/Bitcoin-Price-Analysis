import axios from "axios";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { LineChart } from "react-chartkick";
import "chart.js";

import { RANGES } from "../../core/enum/dateRanges";
import { PadContainer } from "../../core/framework/layout";

const Chart = ({ chartData, currency, range, setChartData, setRange }) => {
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`
      );
      const { data } = response;
      if (data) {
        const { bpi } = data;
        setChartData(bpi);
      }
    }
    fetchData();
  }, [currency, range, setChartData]);
  return (
    <div>
      <PadContainer>
        <Row>
          <Col>
            <div class="float-right">
              <Form>
                <Form.Group controlId="exampleForm.ControlRange">
                  <Form.Control
                    as="select"
                    value={range}
                    onChange={e => setRange(e.target.value)}
                  >
                    {RANGES.map(range => (
                      <>
                        <option value={range}>{range}</option>
                      </>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </PadContainer>
      <PadContainer top="15px">
        <Row>
          <Col>
            <LineChart data={chartData} />
          </Col>
        </Row>
      </PadContainer>
    </div>
  );
};

export default Chart;
