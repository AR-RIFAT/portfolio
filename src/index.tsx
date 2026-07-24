import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // use `!` if using TypeScript and you're sure it exists
root.render(<App />);
