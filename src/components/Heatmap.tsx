import React from 'react';
export default function Heatmap({ data }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
      {Object.entries(data).map(([date, mood]) => (
        <div key={date} title={date} style={{ width: 20, height: 20, background: mood }} />
      ))}
    </div>
  );
}