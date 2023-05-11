import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './images/Atomic_Habits.jpg';
import './images/Bhagwat_geeta.jpg';
import './images/Ikigai.jpg';
import './images/Mans_search_for_meaning.jpg';
import './images/Rich_dad_poor_dad.jpg';
import './images/Sapiens.jpg';


/*
* That was seperate components created for organize.
const Title = () =>{
    return(
        
    );
} 

const Image = () => {
    return(
        
    );
}

const Author = () => { 
    return(
        
    );
}
*/


//* Adding object of books
const firstBook = {
    title : 'Atomic Habits',
    img : './images/Atomic_Habits.jpg',
    author : 'James Clear',
};


const Books = (props) => {
    return(
        <article className='books'>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} />
            <p>{props.author}</p>
        </article>
    );
};


export default function BookList(){

    return(
        <section className='booklist'>    
            <Books title={title} image={image} author={author} />
            <Books title={title} image={image} author={author} />
            <Books title={title} image={image} author={author} />
            <Books title={title} image={image} author={author} />
            <Books title={title} image={image} author={author} />
            <Books title={title} image={image} author={author} />
        </section>
    );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList />,
);
