import { configureStore } from "@reduxjs/toolkit";
import attractionsListingReducer from './reducer/attractionReducder';
 

const store = configureStore({
  reducer: {
    attractions : attractionsListingReducer,
    
  },
});

export default store;