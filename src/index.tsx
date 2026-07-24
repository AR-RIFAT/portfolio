import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a React root
if (!container) {
  throw new Error('Root element not found');
}
const root = createRoot(container);

// Render the app
root.render(<App />);
