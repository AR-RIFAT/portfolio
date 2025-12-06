// NEW (Correct for React 19)
import './index.css';
import { createRoot } from 'react-dom/client'; // <-- Step 1: Import createRoot from 'react-dom/client'
import { App } from './App';

// Step 2: Get the root element from the DOM
const container = document.getElementById('root');

// Step 3: Create a React root
const root = createRoot(container!); // The '!' is a non-null assertion, telling TypeScript you're sure it exists

// Step 4: Render the app
root.render(<App />);
