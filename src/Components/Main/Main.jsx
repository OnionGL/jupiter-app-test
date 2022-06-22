import React, { useState } from 'react'
import style from './Main.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { ShopItemReducer } from '../../Redux/reducer/ShopItemReducer'
import { useEffect } from 'react'
export default function Main() {
   const { shopList } = useSelector(state => state.ShopItemReducer)
   const [shopArray, setShopArray] = useState(shopList)
   const { loadMore } = ShopItemReducer.actions;
   const dispatch = useDispatch()
   const changeBorder = (id) => {
      if (window.screen.width <= 1040) {
         return
      }
      const element = document.getElementById(id)
      if (element.style.outline !== '') {
         element.style.outline = ''
      } else {
         const elementByClass = document.getElementsByClassName(style.main__shopcontainer);
         for (let i = 0; i < elementByClass.length; i++) {
            elementByClass[i].style.outline = '';
         }
         element.style.outline = '10px solid rgb(80, 226, 74)'
      }
   }
   useEffect(() => {
      setShopArray(shopList)
   }, [shopList])
   const loadMoreItem = () => {
      const element = document.getElementById('button__loadMore')
      element.style = 'display: none'
      dispatch(loadMore())
   }
   const filterList = (filter) => {
      if (filter === "Show All" ||
         filter === "<button>Show All</button><button>Design</button><button>Branding</button><button>Illustration</button><button>Motion</button>") {
         setShopArray(shopList)
         return;
      }
      const newArray = shopList.filter(item => {
         return item.type === filter
      })
      setShopArray(newArray)
   }
   return (
      <div className={style.main}>
         <div onClick={(e) => filterList(e.target.innerHTML)} className={style.main__filterlink}>
            <button>Show All</button>
            <button>Design</button>
            <button>Branding</button>
            <button>Illustration</button>
            <button>Motion</button>
         </div>
         <div>
            <select onChange={(e) => filterList(e.target.value)} className={style.main__select}>
               <option>Show All</option>
               <option>Design</option>
               <option>Branding</option>
               <option>Illustration</option>
               <option>Motion</option>
            </select>
         </div>
         <div className={style.main__shoplist}>
            {shopArray?.map(item =>
               <div style={{ background: `url(${item.image})left no-repeat`, backgroundSize: 'cover' }} onClick={() => changeBorder(item.id)} key={item.id} id={item.id} className={style.main__shopcontainer}>
                  <div className={style.main__shopitem_name}>
                     {item.name}
                  </div>
                  <button onClick={(e) => filterList(e.target.innerHTML)} className={style.main__shopitem_type}>
                     {item.type}
                  </button>
               </div>
            )}
         </div>
         <div className={style.main__loadmore}>
            <button id="button__loadMore" onClick={() => loadMoreItem()}>
               Load More
            </button>
         </div>
      </div>
   )
}
