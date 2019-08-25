import axios from "axios";
import React from "react";

import { EUR, INR, USD } from "../../core/enum/currency";
import { PadContainer, SubText } from "../../core/framework/layout";

const Summary = ({ currency = INR }) => {
  const [date, setDate] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios(
        `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
      );
      const { data } = response;
      if (data) {
        const { bpi, time } = data;
        setDate(time.updated);
        setPrice(bpi[currency].rate);
      }
    }
    fetchData();
  }, [currency]);
  return (
    <div>
      <PadContainer top="15px">
        {price && (
          <h4>
            {price} {currency}
          </h4>
        )}
      </PadContainer>
      {date && <SubText font="8pt">{date}</SubText>}
    </div>
  );
};

export default Summary;
