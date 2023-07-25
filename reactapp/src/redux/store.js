import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice";
// const initialState = {
//     users: [],
//     id:0

// }
// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case "register":
//             return{
//                 ...state,
//                 users:[...state.users,action.payload]
//             }   
        
        
        
//         default:
//             return state
//     }
// }
// const store = configureStore({
//     reducer:{

//     },
// })
// export default store;
export default configureStore({
    reducer:{
        user: userReducer,
    },
})

