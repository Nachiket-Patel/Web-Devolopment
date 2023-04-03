import React from 'react';
import { PropTypes } from "prop-types";

export default function TextForm(props){
    return(
        <div> 
            <h1>{props.heading}</h1> 
            <div className="mb-3 my-3" >
                <textarea className="form-control" id="textbox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    );
};

TextForm.proptypes = {
    heading: PropTypes.string.isRequired,
}