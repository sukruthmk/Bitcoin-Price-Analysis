import axios from "axios";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { LineChart } from "react-chartkick";
import "chart.js";

import {
  ONE_MONTH,
  ONE_YEAR,
  THREE_MONTH,
  RANGES
} from "../../core/enum/dateRanges";
import { PadContainer } from "../../core/framework/layout";

const Chart = ({ chartData, currency, range, setChartData, setRange }) => {
  const formatDate = date => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  const getUrl = React.useCallback(() => {
    const date = new Date();
    let startDate = "";
    const endDate = formatDate(date);
    if (range === ONE_MONTH) {
      return `https://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`;
    }
    if (range === THREE_MONTH) {
      date.setMonth(date.getMonth() - 3);
      startDate = formatDate(date);
    }
    if (range === ONE_YEAR) {
      date.setMonth(date.getMonth() - 12);
      startDate = formatDate(date);
    }
    return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`;
  }, [currency, range]);
  const url = getUrl();
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios(url);
      const { data } = response;
      if (data) {
        const { bpi } = data;
        setChartData(bpi);
      }
    }
    fetchData();
  }, [currency, url, range, setChartData]);
  return (
    <div>
      <PadContainer>
        <Row>
          <Col>
            <div className="float-right">
              <Form>
                <Form.Group controlId="exampleForm.ControlRange">
                  <Form.Control
                    as="select"
                    value={range}
                    onChange={e => setRange(e.target.value)}
                  >
                    {RANGES.map((range,index) => (
                        <option value={range} key={index}>{range}</option>
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
