import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import firstImg from './images/Atomic_Habits.jpg';
import secondImg from './images/Bhagwat_geeta.jpg';
import thirdImg from './images/Ikigai.jpg';
import fourthImg from './images/Mans_search_for_meaning.jpg';
import fifthImg from './images/Rich_dad_poor_dad.jpg';
import sixthImg from './images/Sapiens.jpg';


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


//* creating books list
const books = [

    {
        title : 'Atomic Habits',
        img : firstImg,
        author : 'James Clear',
        id: 1,
    },
    
    {
        title : 'Bhagwat Geeta',
        img : secondImg,
        author : 'Ved Vyas',
        id: 2,
    },
    
    {
        title : 'Ikigai',
        img : thirdImg,
        author : 'Francesc Miralles and Hector Garcia',
        id: 3,
    },

    {
        title : 'Man\'s search of meaning',
        img : fourthImg,
        author : 'Viktor Frankl',
        id: 4,
    },

    {
        title : 'Rich dad Poor dad',
        img : fifthImg,
        author : 'Robert Kiyosaki and Sharon Lechter',
        id: 5,
    },

    {
        title : 'Sapiens',
        img : sixthImg,
        author : 'Yuval Noah Harari',
        id: 6,
    },
];


const Books = (props) => {
    const { title, img, author } = props;
    return(
        <article className='books'>
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <p>{author}</p>
        </article>
    );
};


//! if you have 20 properties of book, you can't pass them in individually props but either entire object or use spread operator.
export default function BookList(){
    //* here we use '...' spead operator.
    return(
        
        <section className='booklist'>    
            {books.map((book) => {
                const { id } = book;
                return (
                    <Books {...book} key={id} />
                );
            })}
        </section>
    );

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList />,
);
