import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";

import { EUR, INR, USD } from "../../core/enum/currency";

const BTTable = ({ endDate, range, startDate }) => {
  const [data, setData] = React.useState({});
  const getData = React.useCallback(
    async currency => {
      if (startDate === null || endDate === null) return;
      const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${currency}`;
      const response = await axios(url);
      const { data: resultData } = response;
      if (data) {
        const { bpi } = resultData;
        data[currency] = bpi;
        setData(data);
      }
    },
    [startDate, endDate, data]
  );
  const [filteredData, setFilteredData] = React.useState({});
  React.useEffect(() => {
    async function fetchData() {
      await getData(INR);
      await getData(EUR);
      await getData(USD);
      const hashMap = {};
      [EUR, INR, USD].map(currency => {
        const currencyData = data[currency];
        if (currencyData) {
          // eslint-disable-next-line no-unused-vars
          for (const date in currencyData) {
            const price = currencyData[date];
            const dateObj = new Date(date);
            if (dateObj.getDay() === 5 && price) {
              if (!hashMap[date]) {
                hashMap[date] = {};
              }
              hashMap[date][currency] = price;
            }
          }
        }
      });
      setFilteredData(hashMap);
    }
    fetchData();
  }, [data, endDate, getData, startDate]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Price in INR</th>
          <th>Price in EUR</th>
          <th>Price in USD</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(filteredData).map(date => (
          <tr key={date}>
            <td>{date}</td>
            <td>{filteredData[date][INR]}</td>
            <td>{filteredData[date][EUR]}</td>
            <td>{filteredData[date][USD]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BTTable;
