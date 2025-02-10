import { createSlice } from "@reduxjs/toolkit";

const videoItem=createSlice({
    name:'Video',
    initialState:{
        videoDetails:null
    },
    reducers:{
        addvideoDetails:(state,action)=>{
            state.videoDetails=action.payload
        }
    }
})

export const {addvideoDetails}=videoItem.actions

export default videoItem.reducer