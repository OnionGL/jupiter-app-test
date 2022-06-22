import React from 'react'
import logo from '../../image/logo.png'
import style from './Header.module.css'

export default function Header() {
   return (
      <div className={style.header}>
         <div className={style.header__nav_bar}>
            <img src={logo} />
            <div className={style.header__nav_bar__link}>
               <a href="#">About</a>
               <a href="#">Services</a>
               <a href="#">Pricing</a>
               <a href="#">Blog</a>
            </div>
            <div>
               <button className={style.contact__button}>
                  Contact
               </button>
            </div>
         </div>
         <div className={style.header__info}>
            <div className={style.header__info_title}>
               Portfolio
            </div>
            <div className={style.header__info_subtitle}>
               Agency provides a full service range including technical skills, design, business understanding.
            </div>
         </div>
      </div>
   )
}
