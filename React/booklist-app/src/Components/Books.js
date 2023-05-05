import React from 'react';
import Atomic_Habits from '../images/Atomic_Habits.jpg';


const BookName = () => {
    return(
        <h2>Atomic Habit</h2>    
    );
}

const BookImage = () => {
    return(
        <img src={Atomic_Habits} alt="Atomic Habit book image" />
    );
}

const Author = () => {
    return(
        <p>James Clear</p>
    );
}

export default function Books() {
    return(
        <div className="book">
            <BookName />
            <BookImage />
            <Author />
        </div>
    );
}
