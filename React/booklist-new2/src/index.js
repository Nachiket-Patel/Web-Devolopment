import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const title = "Atomic Habits";
const image = "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg";
const author = "James Clear";

const Title = () =>{
    return(
        <h2>{title}</h2>
    );
} 

const Image = () => {
    return(
        <img src={image} alt='atomic habit' />
    );
}

const Author = () => { 
    return(
        <p>{author}</p>
    );
}


const Books = () => {
    return(
        <article className='books'>
            <Title />
            <Image />
            <Author />
        </article>
    );
};


export default function BookList(){

    return(
        <section className='booklist'>    
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
            <Books />
        </section>
    );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList />,
);
