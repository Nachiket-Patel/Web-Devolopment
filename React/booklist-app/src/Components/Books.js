import React from 'react';


const BookName = () => {
    return(
        <h1>Book Name</h1>    
    );
}

const BookImage = () => {
    return(
        //Todo: add image links here. 
        <p>here is image</p>
        // <img src="" alt="" />
    );
}

const Author = () => {
    return(
        <p>Author</p>
    );
}

export default function Books() {
    return(
        <div>
            <BookName />
            <BookImage />
            <Author />
        </div>
    );
}
