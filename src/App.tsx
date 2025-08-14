import React, { useState, useEffect } from 'react';
import MoodSelector from './components/MoodSelector';
import Heatmap from './components/Heatmap';
import { saveMood, loadAll } from './utils/storage';
export default function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(Object.fromEntries(loadAll()));
  }, []);
  const handleSelect = m => {
    const date = new Date().toISOString().split('T')[0];
    saveMood(date, m);
    setData(prev => ({ ...prev, [date]: m }));
  };
  return <><MoodSelector onSelect={handleSelect}/><Heatmap data={data}/></>;
}