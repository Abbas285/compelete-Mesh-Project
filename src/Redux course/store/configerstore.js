import { createStore } from "redux";
// import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import ReducerBUG from './bug'
 
//  export default store

 export default function(){
    const store =createStore(ReducerBUG,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace:true}))
     return store
    //  return configureStore({ReducerBUG})
 }