import React from "react";

const Quote = ({saying,image}) => {
    return(
        <div>
            <img src={image} alt="Picture Source Not Found"/>
            <h1>{saying}</h1>
        </div>
    );
};

export default Quote;