import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a React root
const root = createRoot(container!);

// Render the app
root.render(<App />);
