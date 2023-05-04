import { createSlice } from "@reduxjs/toolkit";


const livechatSlice = createSlice({
    name:'livechat',
    initialState:{
       messages:[]
    },
    reducers:{
        chatMessages:(state,action)=>{
            state.messages.splice(100,1);
            state.messages.unshift(action.payload)
        }
    }
})

export default livechatSlice.reducer;
export const {chatMessages} = livechatSlice.actions;