import logo from './logo.svg';
import './App.css';
import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';

function App() {
  
  const [number,setNumber]=useState(0);
  // const text = {name :"adem"}

  const text = useMemo(()=>{
         return forExample()
  },[])

  const increment = useCallback(()=>{
        setNumber((prevState)=> prevState+1)
  },[])

  return (
    <div className="App">
    <Header number={number <5 ? 0 : number} text={text} increment={increment}></Header>
    {number}
    <br></br>
    </div>
  );

  function forExample() {
    console.log("döngü başladı");
    for (let index = 0; index < 100; index++) {
      
    }
    console.log("döngü bitti");
    return {name:"adem"}
  }
}

export default App;
