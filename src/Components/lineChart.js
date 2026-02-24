import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { stage: 'Applied', candidates: 120 },
  { stage: 'Phone Screen', candidates: 80 },
  { stage: 'Interview', candidates: 45 },
  { stage: 'Offer', candidates: 20 },
  { stage: 'Hired', candidates: 15 },
];

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: '#fff',   // white background
          padding: '8px 12px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        <p style={{ margin: 0, color: '#000' }}>{`${label}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const CandidatePipelineChart = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #a855f7 0%, #6366f1 40%, #14b8a6 100%)',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff33" />
          <XAxis dataKey="stage" stroke="#fff" tick={{ fill: '#fff' }} />
          <YAxis stroke="#fff" tick={{ fill: '#fff' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: '#fff' }} />
          <Bar dataKey="candidates" fill="#fff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CandidatePipelineChart;
