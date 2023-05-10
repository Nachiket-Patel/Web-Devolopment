import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = () =>{
    return(
        <h2>Title</h2>
    );
} 

const Image = () => {
    return(
        //TODO: add image tag.
        <h1>Image</h1>
    );
}

const Author = () => { 
    return(
        <p>Author</p>
    );
}


const Books = () => {
    return(
        <article>
            <Title />
            <Image />
            <Author />
        </article>
    );
};


export default function BookList(){

    return(
        <section>    
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
