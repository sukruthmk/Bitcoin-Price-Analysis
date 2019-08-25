import axios from "axios";
import React from "react";
import { Form, Col } from "react-bootstrap";

import { EUR, INR, USD } from "../../core/enum/currency";
import { PadContainer, SubText } from "../../core/framework/layout";

const Summary = () => {
  const [currency, setCurrency] = React.useState(INR);
  const [date, setDate] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [qty, setQty] = React.useState(1);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
      );
      const { data } = response;
      if (data) {
        const { bpi, time } = data;
        setDate(time.updated);
        setPrice(bpi[currency].rate_float);
      }
    }
    fetchData();
  }, [currency]);
  const calculatedPrice = parseInt(price) * parseInt(qty);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2
  });
  return (
    <div>
      <PadContainer top="15px">
        <SubText>{qty} Bitcoin equals</SubText>
      </PadContainer>
      <PadContainer top="15px">
        <h4>
          {!isNaN(calculatedPrice) ? (
            <>{currencyFormatter.format(calculatedPrice)}</>
          ) : (
            "0"
          )}
        </h4>
        {date && <SubText font="8pt">{date}</SubText>}
      </PadContainer>
      <PadContainer top="15px">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formQty">
              <Form.Control
                type="text"
                onChange={e => setQty(e.target.value)}
                value={qty}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                as="select"
                onChange={e => setCurrency(e.target.value)}
                value={currency}
              >
                <option>{EUR}</option>
                <option>{INR}</option>
                <option>{USD}</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
        </Form>
      </PadContainer>
    </div>
  );
};

export default Summary;
