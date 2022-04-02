// import store from './store'
// import * as actions from './actionType'
// import { bugAdded,bugResolved } from './action';
// const uncsubcribe=store.subscribe(()=>{
//     console.log("store is chaqnged",store.getState());
// })
// // store.dispatch({
// //     type:actions.BUG_ADDED,
// //     payload:{
// //         description:"Bug1"
// //     }
// // });
// store.dispatch(bugAdded("Bug 1"))
// store.dispatch(bugResolved(1))

// uncsubcribe();
// console.log("store",store.getState())


// import store from './Redux course/store'
import * as actions from './Redux course/store/bug'
// const unsubscribe=store.subscribe(()=>{
//     console.log("redux state is changed",store.getState())
//   })
//   store.dispatch(actions.bugadded("aaa"))
//   store.dispatch(actions.bugresolve(1))
// unsubscribe()
// console.log("redux data is",store)
// console.log("redux data is",store.getState())
// store.dispatch(actions.bugremove())

// import createStores from './Redux course/store/customestore'
// createStores.state=1
// // console.log("custome store",createStores)
// createStores.subscribe(()=>{
//   console.log("store changed",createStores.getState())
// })
// createStores.dispatch(actions.bugadded("ajjja"))
// createStores.dispatch(actions.bugadded("ajjja"))

// console.log("custome store",createStores.getState())


import configerstore from "./Redux course/store/configerstore";
const store=configerstore()
store.dispatch(actions.bugadded("abd"))
console.log("redux",store.getState())



