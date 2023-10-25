import React from "react";
import css from "./style.module.css"
import Image from "next/image";
import Link from "next/link";

import logo from "@/static/logo.svg"

import youtube from "@/static/youtube.svg"
import facebook from "@/static/facebook.svg"

const Footer = () => {
  return <footer className={css.footer}>
      <div className={css.footer__wrapper}>
    <div className={css.footer__left}>
        <Image className={css.footer__left_logo} src={logo} alt={"logo"} height={135} width={200}/>
        <span className={css.footer__left_years}>
            © 2001–2021 ООО «Лайм»
        </span>
        <span className={css.footer__left_protect}>
            Все права защищены. «Лайм» является зарегистрированным товарным знаком Lime Holding SA.
        </span>
        <Link href={"#"}>
            <span className={css.footer__left_confident}>
            Политика Конфиденциальности
        </span></Link>

    </div>
          <div className={css.footer__inner}>
          <ul className={css.footer__company}>

              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link + " " + css.footer__link_title}>Доставка и оплата</Link>
              </li>
              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link}>Вопрос-ответ</Link>
              </li>
              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link}>Поставщикам</Link>
              </li>
              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link}>Контакты</Link>
              </li>
              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link}>Новости</Link>
              </li>
              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link} >Политика</Link>
              </li>
              <li className={css.footer__company_item}>
                  <Link href={"#"} className={css.footer__link} >O компани</Link>
              </li>

          </ul>
          <ul className={css.footer__buyers}>
              <li className={css.footer__buyers_item  } >
                  <Link href={"#"} className={css.footer__link + " " + css.footer__link_title}>Покупателям</Link>
              </li>
              <li className={css.footer__buyers_item}>
                  <Link href={"#"} className={css.footer__link}>Бонусная система</Link>
              </li>
              <li className={css.footer__buyers_item}>
                  <Link href={"#"} className={css.footer__link}>Как вернуть</Link>
              </li>
              <li className={css.footer__buyers_item}>
                  <Link href={"#"} className={css.footer__link}>Как заказать</Link>
              </li>
              <li className={css.footer__buyers_item}>
                  <Link href={"#"} className={css.footer__link}>Программа лояльности</Link>
              </li>
              <li className={css.footer__buyers_item}>
                  <Link href={"#"} className={css.footer__link}>Акции</Link>
              </li>
              <li className={css.footer__buyers_item}>
                  <Link href={"#"} className={css.footer__link}>Шеф-лайм</Link>
              </li>
          </ul>
          </div>
          <div className={css.footer__right }>
              <p className={css.footer__right_text}>Круглосуточная поддержка</p>
              <Link href={"tel: +7756"} className={css.footer__right_call}>
                  7756
              </Link>
              <Link  href={"#"}  className={css.footer__right_btn + " " + css.footer__right_appStore}>
                  Скачать в AppStore
              </Link>
              <Link href={"#"} className={css.footer__right_btn+ " " + css.footer__right_playMarcket}>
                  Скачать в Play Market
              </Link>
              <div className={css.footer__right_socialMedia}>
                  <Image src={facebook} alt={facebook} width={24} height={24}/>
                  <Image src={youtube} alt={youtube} width={24} height={24}/>
                  <Image src={facebook} alt={facebook} width={24} height={24}/>

              </div>
          </div>
      </div>
   </footer>;
};
export default Footer;
