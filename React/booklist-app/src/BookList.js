import React from 'react';
import './BookList.css';
import Books from './Components/Books.js';


export default function BookList() {  
  return (
    <section className="booklist">
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
      <Books />
    </section>
  );
}
