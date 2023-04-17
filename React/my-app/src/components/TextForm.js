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

    function handleClearText(){
        console.log("clear text button was clicked");
        setText('');
    }

    function handleCopyText(){
        console.log("copy text button was clicked");
        const text = document.getElementById('textbox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    function removeExtraSpaces(){
        console.log("remove extra spaces was clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    function handleOnChange(event){
        console.log("On change event"); //to check in console that function is working or not
        setText(event.target.value);
    }

    return(
        <div>

            <div className='container' style={{backgroundColor: props.mode==='dark' ? '#0e0605' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}> 
                <h1>{props.heading}</h1> 
                <div className="mb-3 my-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="textbox" style={{backgroundColor: props.mode==='dark' ? '#0e0605' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            
            <div className="container my-3" style={{backgroundColor: props.mode==='dark' ? '#0e0605' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}>
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
