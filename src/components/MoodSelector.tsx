import React from 'react';
const moods = [
  { label: '😊', value: 'happy' },
  { label: '😔', value: 'sad' },
  { label: '😡', value: 'angry' },
  { label: '😌', value: 'calm' }
];
export default function MoodSelector({ onSelect }) {
  return (
    <div>
      {moods.map(m => (
        <button key={m.value} onClick={() => onSelect(m.value)}>{m.label}</button>
      ))}
    </div>
  );
}