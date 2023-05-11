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


//* Adding books object
const firstBook = {
    title : 'Atomic Habits',
    img : firstImg,
    author : 'James Clear',
};

const secondBook = {
    title : 'Bhagwat Geeta',
    img : secondImg,
    author : 'Ved Vyas',
};

const thirdBook = {
    title : 'Ikigai',
    img : thirdImg,
    author : 'Francesc Miralles and Hector Garcia',
};

const fourthBook = {
    title : 'Man\'s search of meaning',
    img : fourthImg,
    author : 'Viktor Frankl',
};

const fifthBook = {
    title : 'Rich dad Poor dad',
    img : fifthImg,
    author : 'Robert Kiyosaki and Sharon Lechter',
};

const sixthBook = {
    title : 'Sapiens',
    img : sixthImg,
    author : 'Yuval Noah Harari',
};


const Books = (props) => {
    const { title, image, author } = props;
    return(
        <article className='books'>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{author}</p>
        </article>
    );
};


export default function BookList(){

    return(
        <section className='booklist'>    
            <Books title={firstBook.title} image={firstBook.img} author={firstBook.author} />
            <Books title={secondBook.title} image={secondBook.img} author={secondBook.author} />
            <Books title={thirdBook.title} image={thirdBook.img} author={thirdBook.author} />
            <Books title={fourthBook.title} image={fourthBook.img} author={fourthBook.author} />
            <Books title={fifthBook.title} image={fifthBook.img} author={fifthBook.author} />
            <Books title={sixthBook.title} image={sixthBook.img} author={sixthBook.author} />
        </section>
    );

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList />,
);
