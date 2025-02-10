import { configureStore } from "@reduxjs/toolkit";
import playlistItemSlice from "../utils/PlayListItemSlice"
import videoItem from "../utils/VideoSlice"

const AppStore=configureStore({
    reducer:{
        playListItem:playlistItemSlice,
        videoItem:videoItem
    }

})

export default AppStore;