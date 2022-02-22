import React from "react";
import style from "./quote.module.css";

const Quote = ({saying,image}) => {
    return(
        <div className={style.box}>
            <img className={style.image} src={image} alt="Picture Source Not Found"/>
            <h3 className={style.quote}>-"{saying}"</h3>
        </div>
    );
};

export default Quote;