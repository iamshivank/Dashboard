// Import the core React library, which includes the functionality needed for creating user interfaces.
import React from 'react';

// Import the ReactDOM library, which provides DOM-related functionality for React applications.
// 'client' is used here because this is likely part of the new React 18 rendering API, which uses createRoot instead of ReactDOM.render().
import ReactDOM from 'react-dom/client';
import './index.css';

// Import the main App component from a file named 'App.js' or similar in the same directory.
import App from './App';

// Create a root for the React application. This root will manage rendering and updates to the DOM element with the id 'root'.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root. This line tells React to mount the App component at the DOM node with id 'root'.
root.render(<App />);