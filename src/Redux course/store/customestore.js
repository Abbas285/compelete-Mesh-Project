

import reducer from './reducer';
function createStore(){

let state 
let listeners=[]

function dispatch(action){
  state=reducer(state,action)
  for(let i=0;i<listeners.length;i++)
  listeners[i]()
  
}

function subscribe(listiner){
    listeners.push(listiner)
}
function getState() {
    return state
}
return {
    dispatch,
    getState,
    subscribe

}
}


export default createStore(reducer)