import {BUG_ADDED,BUG_REMOVE,RESOVE_BUG} from './actionType'
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