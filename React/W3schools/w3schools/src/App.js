import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './React-Router/Layout';
import Home from './React-Router/Home';
import Contact from './React-Router/Contact';
import Blogs from './React-Router/Blogs';
import NoPage from './React-Router/NoPage';


export default function App() {
  
  return (
    <div>
      <h1>Nachiket Patel</h1>
      <p>This is tutorials from W3schools</p><br/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}
