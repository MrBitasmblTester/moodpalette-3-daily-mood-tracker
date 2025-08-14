# MoodPalette-3-Daily-Mood-Tracker

Description
A simple and visually appealing web app that allows users to log their daily moods and view them as a colorful calendar heatmap.

## Tech Stack
- React

## Requirements
- Mood selection interface (Use emoji or color buttons for mood selection)
- Calendar heatmap display (Map moods to colors and show them on a monthly grid)
- Local storage persistence (Save moods locally so data stays after refresh)

## Installation
1. Ensure you have Node.js (v14+) and npm installed.
2. Clone the repository:
   bash
   git clone https://github.com/your-username/moodpalette-3-daily-mood-tracker.git
   
3. Change into the project directory:
   bash
   cd moodpalette-3-daily-mood-tracker
   
4. Install dependencies:
   bash
   npm install
   

## Usage
1. Start the development server:
   bash
   npm start
   
2. Open your browser and navigate to `http://localhost:3000`.
3. Click on any date in the calendar to select or update your mood using the emoji/color picker.
4. View your mood entries visualized as a colorful heatmap. Your data is saved in your browser’s local storage and persists across refreshes.

## Implementation Steps
1. Initialize the project using Create React App.
2. Create a `MoodSelector` component with emoji/color buttons for users to choose their mood.
3. Define a mapping between mood values and color codes.
4. Build a `CalendarHeatmap` component that renders a monthly grid and applies colors based on saved moods.
5. Implement local storage utilities to save and retrieve mood entries by date.
6. On app load, fetch existing mood data from local storage and populate the heatmap.
7. Style components to ensure a clean, intuitive, and responsive design.
8. Test the mood selection, data persistence, and heatmap rendering across different browsers.

(Optional) ## API Endpoints
This is a purely front-end React application; no external API endpoints are required.