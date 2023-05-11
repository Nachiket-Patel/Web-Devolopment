import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const title = "Atomic Habits";
const image = "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg";
const author = "James Clear";

//? That was seperate components created for organize.
// const Title = () =>{
//     return(
        
//     );
// } 

// const Image = () => {
//     return(
        
//     );
// }

// const Author = () => { 
//     return(
        
//     );
// }


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
