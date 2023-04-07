import React from 'react'

function Header({number,text,increment}) {
  return (
    <div>
      {<div>Header {number}</div>}
      {console.log("header render edildi")}
      <code>{JSON.stringify(text)}</code>
      <hr></hr>
    <button onClick={increment}>Click</button>    

    </div>
  )
}

export default React.memo(Header) 
