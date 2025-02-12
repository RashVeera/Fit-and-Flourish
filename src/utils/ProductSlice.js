import { createSlice } from "@reduxjs/toolkit";

const productItem=createSlice({
    name:'Product',
    initialState:{
        productDetails:{}
    },
    reducers:{
        addproductDetails:(state,action)=>{
            const {name}=action.payload
            if(state.productDetails[name]){
                state.productDetails[name].quantity+=1
            }
            else{
                state.productDetails[name]={...action.payload,quantity:1}
            }

            
        },
        removeproductDetails:(state,action)=>{
            const {name}=action.payload
            if(state.productDetails[name] && state.productDetails[name].quantity>=1){

                state.productDetails[name].quantity-=1
            }
            else{
                delete state.productDetails[name]
            }
        }
    }
})

export const {addproductDetails,removeproductDetails}=productItem.actions

export default productItem.reducer