import React, { useEffect, useState } from "react";
import css from "./style.module.css";
import Logo from "@/components/UI/Logo";
import like from "@/static/like.svg";
import cart from "@/static/cart.svg";
import percent from "@/static/percent.svg";
import registrate from "@/static/registrate.svg";
import Image from "next/image";
import { menuItem } from "@/assets/menuItem";
import Link from "next/link";
import Cart from "@/components/Layout/Head/Cart";
const Head = () => {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    if (menuActive === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuActive]);
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className={css.header}>
        <div className="container">
          <nav className={css.nav}>
            {/*<button className={menuActive?`${css.nav__menu } ${css.nav__menuActive}`:css.nav__menu} onClick={()=>handleMenu()}>*/}
            <button
              className={
                menuActive
                  ? css.nav__menu + " " + css.nav__menuActive
                  : css.nav__menu
              }
              onClick={() => handleMenu()}
            >
              Каталог
              <span className={css.nav__span}></span>
            </button>
            <button className={css.nav__sales}>
              <div className={css.nav__sales_wrapper}>
                <Image src={percent} width={25} height={25} alt="percent" />
              </div>

              <span className={css.nav__sales_text}> Знижки</span>
            </button>
            <Logo />
            <button className={css.nav__button}>
              <Image src={registrate} width={30} height={30} alt="registret" />
              <span className={css.nav__textBtn}>Кабінет</span>
            </button>
            <button className={css.nav__button}>
              <Image src={like} width={30} height={30} alt="like" />
              <span className={css.nav__textBtn}>Улюблене</span>
            </button>
            <Cart />
            <ul
              className={
                menuActive
                  ? css.nav__list + " " + css.nav__active
                  : css.nav__list
              }
            >
              <p className={css.nav__text}>Выберите категорию</p>
              {menuItem.map((i) => (
                <li key={i.id} className={css.nav__item}>
                  <Link className={css.nav__link} href={i.slug}>
                    <Image
                      src={i.imageUrl}
                      alt={i.name}
                      width={25}
                      height={25}
                    />
                    <span className={css.nav__name}>{i.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Head;
