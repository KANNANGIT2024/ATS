import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faNoteSticky,
  faStar,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ATSAnalyzer from "./ATSAnalyzer";
import CandidatePipelineChart from './lineChart';
import Piecharts from "./Piechart";
function Home() {
  return (
    <div>
          <div className="main-container">
      <div className="left-grid">
        <ATSAnalyzer />
      </div>
      <div className="right-grid">
        <div className="heading">
          <h1>ATS Resume Analyzer</h1>
          <p>AI-powered recruitment insights and candidate analysis.</p>
        </div>
        <div className="main-grid">
          <div className="div">
            <FontAwesomeIcon icon={faNoteSticky} style={{ color: 'red', fontSize: '2rem' }} />
            <p>Total Resumes</p>
          </div>
          <div className="div">
            <FontAwesomeIcon icon={faPhone} style={{ color: 'green', fontSize: '2rem' }} />
            <p>Analyzed Candidates</p>
          </div>
          <div className="div-right">
            <FontAwesomeIcon icon={faStar} style={{ color: 'gold', fontSize: '2rem' }}/>

            <p>Avg. Match Score</p>
          </div>
          <div className="div">
            <FontAwesomeIcon icon={faClock} style={{ color: 'orange', fontSize: '2rem' }} />

            <p>Avg. Processing Time</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <CandidatePipelineChart/>
    </div>
    <div>
      <Piecharts/>
    </div>
    </div>
  
  );
}

export default Home;
