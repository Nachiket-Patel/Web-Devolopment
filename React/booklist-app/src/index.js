import React from 'react';
import { createRoot } from 'react-dom/client';
import BookList from './BookList.js';
import './index.css';


const root = createRoot(document.getElementById('root'));
root.render(
  <BookList />,  
);
