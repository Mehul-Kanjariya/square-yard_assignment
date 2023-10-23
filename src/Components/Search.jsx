import React, { useState } from 'react'
import { searchData } from '../redux/action';
import { useDispatch } from 'react-redux';

export const Search = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handleclick = () => {
        dispatch(searchData(text))
    }

  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        {" "}
        <button onClick={handleclick}>Search</button>
        <br/>
        <br/>
    </div>
  )
}
