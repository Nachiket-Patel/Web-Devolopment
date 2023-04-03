import React, { useState } from 'react';
import { PropTypes } from "prop-types";

export default function TextForm(props){

    const [text,setText] = useState("Enter text here");

    function handleUpClick(){
        console.log("upper case button was clicked"); //to check in console that function is working or not
        const upperText = text.toUpperCase();
        setText(upperText);
    }

    function handleOnChange(event){
        console.log("On change event"); //to check in console that function is working or not
        setText(event.target.value) ;
    }

    return(
        <div> 
            <h1>{props.heading}</h1> 
            <div className="mb-3 my-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    );
};

TextForm.proptypes = {
    heading: PropTypes.string.isRequired,
}
