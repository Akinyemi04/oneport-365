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
        filterArray:['COSCO','CMA CGM','MAERSK','PIL','ZIM','OOCL','MSC','ONE','ESL','EVERGREEN'],
        filter:'COSCO',
        filteredData:[],
        displayData:[]
        ,
        loading:true, // to condition display of controlhub 
        
    },
    reducers:{
        updateDisplayData(state,action){
            return{
                ...state,
                displayData:action.payload
            }
        },
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
        },
        load(state,action){
            return{
                ...state,
                loading:action.payload
            }
        },
        filtered(state,action){
            
            return{
                ...state,
                filteredData:action.payload
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