import { configureStore } from "@reduxjs/toolkit";
import playlistItemSlice from "../utils/PlayListItemSlice"
import videoItem from "../utils/VideoSlice"
import productItem from "../utils/ProductSlice"

const AppStore=configureStore({
    reducer:{
        playListItem:playlistItemSlice,
        videoItem:videoItem,
        product:productItem
    }

})

export default AppStore;