import { configureStore, createSlice } from "@reduxjs/toolkit";


const rateSlice = createSlice({
    name:'rate',
    initialState:{
        originalData:[],
        containerSizes:['20FT','40FT','40FT HC'],
        containerTypes:['DRY','REEFER'],
        containerSize:'20FT',
        containerType:'dry',
        displaySizeOption:false,
        displayTypeOption:false,
        filterArray:['COSCO','PIL','ZIM','MAERSK','CMA CGM','OOCL','MSC','ONE','ESL','EVERGREEN'],
        filter:'COSCO'

    },
    reducers:{
        updateData(state,action){
            return{
                ...state,
                originalData:action.payload
            }
        },
        updateContainerSize(state,action){
            return{
                ...state,
                containerSize:action.payload
            }
        },
        updateContainerType(state,action){
            console.log(typeof(action.payload))
            return{
                ...state,
                containerType:action.payload.toLowerCase()
            }
        },
        displaySize(state,action){
            return{
                ...state,
                displaySizeOption:action.payload
            }
        },
        displayType(state,action){
            return{
                ...state,
                displayTypeOption:action.payload
            }
        },
        updateFilter(state,action){
            return{
                ...state,
                filter:action.payload
            }
        }
    }
})

export const rate = rateSlice.actions

const store = configureStore({
    reducer:{
        data:rateSlice.reducer
    }
}
    
)

export default store;