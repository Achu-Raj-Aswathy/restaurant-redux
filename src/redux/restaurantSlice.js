import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// For API calls in redux/slice we use Thunk
// Thunk is a method provided by redux to make api calls
// api calls are synchronous function, so thunk make use of the concept Promise

// function to call api 
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data)
    return result;
})

const restaurantSlice = createSlice({
    name:"restaurantList",
    initialState:{
        loading:false,  //pending state in promise
        allRestaurant:[],  //resolve
        error:"",  //reject1
        searchRestaurant:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading = false;
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading = false;
            state.allRestaurant = [];
            state.error = action.error.message
        })
    },
    reducers:{
        search:(state, action)=>{
            state.allRestaurant.restaurants = state.searchRestaurant.restaurants.filter(
                item => item.neighborhood.toLowerCase().includes(action.payload)
            )
        }
    }
})

export default restaurantSlice.reducer;
export const {search} = restaurantSlice.actions