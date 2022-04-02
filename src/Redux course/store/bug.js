
import {createAction} from '@reduxjs/toolkit'

// action type
 const BUG_ADDED="BUG_ADDED"
 const BUG_REMOVE="BUG_REMOVE"
 const RESOVE_BUG="RESOVE_BUG"

 //action creatiors
 const action=createAction(BUG_ADDED)
 console.log("action",action("abcd"))
 export const bugadded=(description)=>{
    return {
        type:BUG_ADDED,
        payload:{
            description
        }
    }
}

export const bugremove=(id)=>{
return{
    type:BUG_REMOVE,
    payload:{
        id
    }
}
}
 export const bugresolve=(id)=>{
    return {
        type:RESOVE_BUG,
        payload:{
            id
        }
    } 

}


// reducer
let lastid=0
 
 
 const reducer=(state=[],action)=>{
    if(action.type===BUG_ADDED){
        return [
            ...state,{
                id:++lastid,
                description:action.payload.description,
                resolved:false
            }
        ]
    }
    else if(action.type===RESOVE_BUG){
      return state.map(bug=>{
return bug.id===action.payload.id?{...bug,resolved:true}:bug
       })
    }
    else if(action.type===BUG_REMOVE){
        
        return state.filter(id=>id.id!==action.payload.id)
    }
    return state

}
export default reducer