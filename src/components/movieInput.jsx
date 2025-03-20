import { useState } from "react"
import { addMovie } from "../slice";
import { useDispatch } from "react-redux";

export const MovieInput=()=>{
    const [newMovie, setNewMovie]= useState("");

    const dispatch=useDispatch();

    const handleAddMovie=()=>{
        if (newMovie){
            dispatch(addMovie(newMovie));
            setNewMovie("");
        }
    }
    return <div className="place-self-center w-full max-w-sm">
        <h1 className="font-bold text-center mb-4">Movie Watch List</h1>
        <div className="flex items-center space-x-2">
        <input onChange={(e)=> setNewMovie(e.target.value)} value={newMovie} className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray"
            placeholder="Enter movie title"/>
        <button className=" text-black outline outline-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition duration-200" onClick={handleAddMovie}>Add</button>
        </div>
    </div>
}