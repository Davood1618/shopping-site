import React, { useRef } from 'react'
import './test.css'

export default function Test() {
    const inputEl =useRef()

    
const makeRed=()=>{
    inputEl.current.classList.toggle('redBack')
}
  return (
    <div>
         
        <h1 className='' ref={inputEl}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta tempore provident, perspiciatis vel quos, nihil ex dolore architecto porro commodi in dicta consequuntur vitae temporibus esse? Non cupiditate beatae ut.</h1>

 <button className='btn btn-danger' onClick={makeRed}> click on me</button>
    </div>
  )
}
