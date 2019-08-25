import React from "react";

import { ONE_MONTH } from "./core/enum/dateRanges";
import { MainContainer } from "./core/framework/layout";
import Table from "./components/table";
import Widget from "./components/widget";

function App() {
  const [range, setRange] = React.useState(ONE_MONTH);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  return (
    <div>
      <MainContainer>
        <Widget
          range={range}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setRange={setRange}
        />
      </MainContainer>
      <MainContainer>
        <Table 
        endDate={endDate}
        range={range}
        startDate={startDate}
        />
      </MainContainer>
    </div>
  );
}

export default App;
