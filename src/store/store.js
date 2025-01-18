import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// Import the postsSlice if posts functionality is required
// import postsSlice from './postsSlice'; 

const store = configureStore({
    reducer: {
        auth: authSlice,
        // Uncomment the next line if postsSlice is implemented
        // posts: postsSlice,
    },
});

export default store;
