import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./piecharts.css";
export default function Piecharts() {
  return (
    <div className="main-pie">
      <div className="pie">
        <PieChart
          data={[
            { value: 10, color: "#e32727ff" },
            { value: 15, color: "#C13C37" },
            { value: 20, color: "#efe114ff" },
            { value: 20, color: "#216a2dff" },
            { value: 20, color: "#586a2139" },
            { value: 20, color: "#7e0db3ff" },
            { value: 20, color: "#6a3d21ff" },
          ]}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div className="course">
        <h5>React js</h5>
        <h5>Python</h5>
         <h5>Python</h5>
        <h5>JavaScript</h5>
        <h5>Django</h5>
        <h5>PostgreSQL</h5>
      </div>
    </div>
  );
}
