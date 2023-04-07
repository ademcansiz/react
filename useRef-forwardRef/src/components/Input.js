import {forwardRef} from 'react'

function Input(props,ref) {

  return (
    <div>
       <h1>forwardRef</h1>
      <input ref={ref} ></input>
    </div>
  )
}

export default forwardRef(Input)
