import React from 'react';
import  css from './style.module.css'

const Search = () => {
    return (
        <>
            <label className={css.search__label}>
                <input className={css.search__input} placeholder="Купить молоко"/>

            </label>
        </>
    );
};

export default  Search;