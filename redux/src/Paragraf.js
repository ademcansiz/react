import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ekle } from './Paragraf/ParagrafSlice'

function Paragraf() {
    const paragraf = useSelector((state)=> state.Paragraf.value)
    const dispatch = useDispatch(); 
    return (
    <div>
      <p>
        {paragraf}
        <br></br>
        <button onClick={()=>dispatch(ekle())}> toolkit ekle</button>
      </p>
    </div>
  )
}

export default Paragraf
