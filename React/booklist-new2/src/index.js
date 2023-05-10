import React from 'react';
import ReactDOM from 'react-dom/client';


const Title = () => <h2>Title</h2>;

const Image = () => <h1>Image</h1>;

const Author = () => <p>Author</p>;


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
        <Books />
    );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList />,
);
