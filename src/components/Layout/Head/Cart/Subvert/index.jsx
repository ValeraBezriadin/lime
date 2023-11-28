import React from "react";
import css from "./style.module.css";

const Subvert = ({orderHandler}) => {
  return (
    <div className={css.subvert}>
      <button className={css.subvert__back} onClick={()=>orderHandler()}>
       Назад
      </button>
      <form className={css.subvert__contact}>
        <h3 className={css.subvert__title}>Контактные данные</h3>
        <div className={css.subvert__contact_innner}>
          <label className={css.subvert__label}>
            
            <input
              className={css.subvert__contact_input}
              type="text"
              placeholder="Ваше имя"
            />
            <span className={css.subvert__contact_name}>Ваше имя</span>
          </label>
          <label className={css.subvert__label}>
            
            <input
              className={css.subvert__contact_input}
              type="text"
              placeholder="Номер телефона"
            />
            <span className={css.subvert__contact_name}>Номер телефона</span>
          </label>
        </div>
        <label className={css.subvert__label}>
          
          <input
            className={css.subvert__contact_input}
            type="text"
            placeholder="Ваш e-mail"
          />
          <span className={css.subvert__contact_name}>Ваш e-mail</span>
        </label>
      </form>
      <form className={css.subvert__contact}>
        <h3 className={css.subvert__title}>Адрес доставки</h3>
        <label className={css.subvert__label}>
         
          <input
            className={css.subvert__contact_input}
            type="text"
            placeholder="Ваш адрес"
          />
           <span className={css.subvert__contact_name}>Ваш адрес</span>
        </label>

        <div className={css.subvert__adress_innner}>
          <label className={css.subvert__label}>
            
            <input
              className={css.subvert__contact_input}
              type="text"
              placeholder="Подъезд"
            />
            <span className={css.subvert__contact_name}>Подъезд</span>
          </label>
          <label className={css.subvert__label}>
           
            <input
              className={css.subvert__contact_input}
              type="text"
              placeholder="Этаж"
            />
             <span className={css.subvert__contact_name}>Этаж</span>
          </label>
          <label className={css.subvert__label}>
           
            <input
              className={css.subvert__contact_input}
              type="text"
              placeholder="Квартира"
            />
             <span className={css.subvert__contact_name}>Квартира</span>
          </label>
        </div>
        <label className={css.subvert__label + " " + css.subvert__calendar}>
          
          <input
            className={css.subvert__contact_input}
            type="text"
            placeholder="Выберите дату и время доставки"
          />
          <span className={css.subvert__contact_name}>
            Выберите дату и время доставки
          </span>
        </label>
      </form>
      <div className={css.subvet__pay}>
        <h3 className={css.subvert__title}>Оплата заказа</h3>
        <div className={css.subvert__pay_grid}>
          <button className={css.subvert__pay_btn}>
            {" "}
            <span> Картой онлайн</span>
          </button>
          <button className={css.subvert__pay_btn}>
            <span>Картой курьеру</span>
          </button>
          <button className={css.subvert__pay_btn}>
            <span>Наличными курьеру</span>
          </button>
          <button className={css.subvert__pay_btn}>
            <span>Сертификатом</span>
          </button>
        </div>
        <form className={css.subvert__pay_form}>
          <label className={css.subvert__label}>
            
            <input
              className={css.subvert__contact_input}
              type="text"
              placeholder="Комментарий к заказу"
            />
            <span className={css.subvert__contact_name}>
              Комментарий к заказу
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Subvert;
