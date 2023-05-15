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
//* add Id to all books
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


const Books = ({ title, image, author }) => {
    return(
        <article className='books'>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{author}</p>
        </article>
    );
};


//? To solve key prop error, add id to all books in list
//* let's use map method in BookList to get books from list
export default function BookList(){

    return(
        //* We don't need to use Books six times, map mathod will use Books as many books are in list
        <section className='booklist'>    
            {books.map((book) => {
                const { img, title, author,id } = book;
                return (
                    <Books title={title} image={img} author={author} key={id} />
                );
            })}
        </section>
    );

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList />,
);
