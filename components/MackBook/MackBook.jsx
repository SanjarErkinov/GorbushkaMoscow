import React from 'react';
import s from "./MackBook.module.css"
const MackBook = () => {
    return (
        <div className={s.container_mack}>
            <img className={s.mack} src="./mack.svg" alt="mack" />
            
        </div>
    );
};

export default MackBook;