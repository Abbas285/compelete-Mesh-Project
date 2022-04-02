import {BUG_ADDED,BUG_REMOVE,RESOVE_BUG} from './actionType'

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