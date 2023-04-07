import './App.css';
import {useRef} from "react"
import Input from './components/Input';

function App() {

  const inputRef = useRef();
  const focusInput = ()=>{
    inputRef.current.focus();
  }

  const inputRefForward = useRef();
  const focusInputForward = ()=>{
    inputRefForward.current.focus();
  }

  return (
    <div className="App">
      <h1>useRef</h1>
      <input ref={inputRef}></input><br></br>
      <button onClick={focusInput}>Focus</button>
      <br></br>

      <Input ref={inputRefForward}></Input>
      <button onClick={focusInputForward}>Focus</button>
    </div>
  );
}

export default App;
