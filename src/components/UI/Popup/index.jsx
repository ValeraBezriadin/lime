import React from 'react';
import css from  "./style.module.css"
const Popup = ({show}) => {
    return (
        <div className={show ? css.popap + " " + css.active : css.popap}>
            <div className={css.popap__inner }>
                <span>Додано в корзину</span>
            </div>
        </div>
    );
};

export default Popup;