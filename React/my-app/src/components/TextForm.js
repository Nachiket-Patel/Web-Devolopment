import React, { useState } from 'react';
import { PropTypes } from "prop-types";

export default function TextForm(props){

    const [text,setText] = useState('');

    function handleUpClick(){
        console.log("upper case button was clicked"); //to check in console that function is working or not
        const upperText = text.toUpperCase();
        setText(upperText);
    }

    function handleLoClick(){
        console.log("Lower case button was clicked"); //to check in console
        const lowerText = text.toLowerCase();
        setText(lowerText);
    }

    function handleClear(){
        setText('');
    }

    function handleOnChange(event){
        console.log("On change event"); //to check in console that function is working or not
        setText(event.target.value) ;
    }

    return(
        <div>

            <div className='container'> 
                <h1>{props.heading}</h1> 
                <div className="mb-3 my-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>clear</button>
            </div>
            
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p><b>{text.split(' ').length}</b> words, <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(' ').length}</b> minites to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            
        </div>
    );
};

TextForm.proptypes = {
    heading: PropTypes.string.isRequired,
}
