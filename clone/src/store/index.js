import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './ItemSlice';
import fetchStatusSlice from './fetchStatusSlice';
import bagSlice from './BagSlice';




// creating the store
const myntraStore=configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})

export default myntraStore;