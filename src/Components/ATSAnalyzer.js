// import React from "react";
// import "./ATSAnalyzer.css";
// import {Navigate, useNavigate} from "react-router-dom"
// export default function ATSAnalyzer() {
//   const handleSubmit =() => Navigate ('/Resume')
//   const navigate = useNavigate();
//   return (

//     <div className="main-leftdiv">
//       <div className="ATSh4">
//         <h4>ATS Analyzer</h4>
//         <p>AI-Powered Recruitment</p>
       
//       </div>
      
//         <div className="list">
//         <h4>Dashboard</h4>
//         <span onClick={handleSubmit}><h4>Resume</h4></span>
        
//         <h4>Candidate</h4>
//         <h4>Job Postings</h4>
//         <h4>Analytics & Reports</h4>
//         <h4>Settings</h4>
//       </div>
//     </div>
//   );
// }
// 
import React from "react";
import "./ATSAnalyzer.css";
import { useNavigate } from "react-router-dom";

export default function ATSAnalyzer() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/resume");
  };

  return (
    <div className="main-leftdiv">
      <div className="ATSh4">
        <h4>ATS Analyzer</h4>
        <p>AI-Powered Recruitment</p>
      </div>

      <div className="list">
        <h4>Dashboard</h4>

        <span onClick={handleSubmit} style={{ cursor: "pointer" }}>
          <h4>Resume</h4>
        </span>

        <h4>Candidate</h4>
        <h4>Job Postings</h4>
        <h4>Analytics & Reports</h4>
        <h4>Settings</h4>
      </div>
    </div>
  );
}
