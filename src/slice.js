import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[],
}

const movieSlice= createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            const newMovie= {
                id:Date.now(),
                name:action.payload,
            };
            state.movies.push(newMovie);
    },
        removeMovie: (state,action)=>{
            state.movies=state.movies.filter((movie)=>movie.id !== action.payload);
        }
}})

export const {addMovie, removeMovie}= movieSlice.actions;
export default movieSlice.reducer;