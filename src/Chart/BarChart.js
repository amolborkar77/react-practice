import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Bar = ({ name, ticketCount, colour, height }) => {
  return (
    <motion.div
      className="bar"
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      exit={{ height: 0 }}
      transition={{duration: 0.8}}
      style={{
        // height: `${ticketCount}%`,
        // height: `${height}%`,
        backgroundColor: colour,
      }}
    >
      <div className="tooltip">{`${name}-${ticketCount}`}</div>
    </motion.div>
  );
};

const BarChart = ({ chartData }) => {
  const maxTicketCount = Math.max(...chartData.map((item) => item.ticketCount));

  return (
    <motion.div
      className="bar-chart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="chart">
        {chartData.map((bar) => (
          <Bar
            key={bar.id}
            height={(bar.ticketCount / maxTicketCount) * 100}
            {...bar}
          />
        ))}
      </div>

      <div className="x-axis-label">Departments</div>
      <div className="y-axis-label">Number of Tickets</div>
    </motion.div>
  );
};

export default BarChart;
