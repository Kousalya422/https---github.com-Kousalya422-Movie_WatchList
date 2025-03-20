import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../slice";
import delete_icon from "../assets/delete.png";

export const MovieList= ()=>{
 const movies=useSelector((state)=> state.m.movies);
 const dispatch=useDispatch();

    const handleRemoveMovie=(id)=>{
                dispatch(removeMovie(id));
        }

    return <div className="place-self-center w-full max-w-sm">
        <br></br>
        <h3 className="place-self-center font-semibold mb-4">Movie List</h3>
        {
            movies.map((movie)=>(
                <div key={movie.id} className="flex items-center justify-between py-2 border-b border-gray-200 ml-4">{movie.name}
                <img onClick={()=> handleRemoveMovie(movie.id)} src={delete_icon} className="w-5 h-6 cursor-pointer"/>
                </div>
            ))
        } 
    </div>
}