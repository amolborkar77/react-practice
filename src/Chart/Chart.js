import React, { useState } from "react";
import BarChart from "./BarChart";

import CHART_DATA from "./constants";

const Chart = () => {
  const [toggleButton, setToggleButton] = useState(true);

  const handleToggle = () => {
    setToggleButton((prev) => !prev);
  };

  return (
    <div className="chart-container">
      <button onClick={handleToggle}>Toggle Chart</button>

      {toggleButton && <BarChart chartData={CHART_DATA} />}
    </div>
  );
};

export default Chart;
