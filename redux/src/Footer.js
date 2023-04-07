import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const data = useSelector((state) => state.counter.value)
  return (
    <div>
      Globalden gelen veri :  {data}
    </div>
  )
}

export default Footer
