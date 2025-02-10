import { createSlice } from "@reduxjs/toolkit";

const PlayListItemSlice=createSlice({
    name:'PlayListItem',
    initialState:{
        playListItemDetails:null
    },
    reducers:{
        addplayListItem:(state,action)=>{
            state.playListItemDetails=action.payload
        }
    }
})

export const {addplayListItem}=PlayListItemSlice.actions

export default PlayListItemSlice.reducer