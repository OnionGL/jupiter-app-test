import { createSlice } from "@reduxjs/toolkit";
import image1 from '../../image/1.png'
import image2 from '../../image/2.png'
import image3 from '../../image/3.png'
import image4 from '../../image/4.png'
import image5 from '../../image/5.png'
import image6 from '../../image/6.png'
import image7 from '../../image/7.png'
import image8 from '../../image/8.png'
import image9 from '../../image/9.png'
const moreItem = [
   {
      id: 10,
      name: 'SOFA2',
      type: 'Design',
      image: image1
   }, {
      id: 11,
      name: 'KeyBoard2',
      type: 'Branding',
      image: image2
   }, {
      id: 12,
      name: 'DDDone2',
      type: 'Motion',
      image: image3
   }, {
      id: 13,
      name: 'Abstract2',
      type: 'Design',
      image: image4
   }, {
      id: 14,
      name: 'HandP2',
      type: 'Branding',
      image: image5
   }, {
      id: 15,
      name: 'Architect2',
      type: 'Motion',
      image: image6
   }, {
      id: 16,
      name: 'CalC2',
      type: 'Design',
      image: image7
   }, {
      id: 17,
      name: 'Sport2',
      type: 'Branding',
      image: image8
   }, {
      id: 18,
      name: 'Sport2',
      type: 'Design',
      image: image9
   }
]

const initialState = {
   shopList: [{
      id: 1,
      name: 'SOFA',
      type: 'Design',
      image: image1
   }, {
      id: 2,
      name: 'KeyBoard',
      type: 'Branding',
      image: image2
   }, {
      id: 3,
      name: 'Work Media',
      type: 'Illustration',
      image: image3
   }, {
      id: 4,
      name: 'DDDone',
      type: 'Motion',
      image: image4
   }, {
      id: 5,
      name: 'Abstract',
      type: 'Design',
      image: image5
   }, {
      id: 6,
      name: 'HandP',
      type: 'Branding',
      image: image6
   }, {
      id: 7,
      name: 'Architect',
      type: 'Motion',
      image: image7
   }, {
      id: 8,
      name: 'CalC',
      type: 'Design',
      image: image8
   }, {
      id: 9,
      name: 'Sport',
      type: 'Branding',
      image: image9
   }],
   isLoading: false
}


export const ShopItemReducer = createSlice({
   name: 'shop',
   initialState,
   reducers: {
      loadMore(state, action) {
         state.shopList.push(...moreItem)
      }
   },
})

export default ShopItemReducer.reducer;

