import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ShopItemReducer from './reducer/ShopItemReducer';

const rootReducer = combineReducers({
   ShopItemReducer
})

export const SetupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}
