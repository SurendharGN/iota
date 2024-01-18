import React, { useState } from 'react'

const Token = () => {
  const [url,setUrl]=useState('')
  return (
    <div style={{display:'flex',justifyContent:'center',
    flexDirection:'column',textAlign:'center'}} >
      <h2>Enter the URL:</h2>
      <input style={{outline:'none',border:'0',textDecoration:'underline',width:'41em',backgroundColor:'#ebebeb',heigth:'14em'}} onChange={(e)=>{setUrl(e.target.value)}}></input>
      <span id='separator'></span>
      <button style={{backgroundColor:'#ebebeb',border:'1px solid black',borderRadius:'2px',marginTop:'32px'}}>Check</button>
    </div>
  )
}

export default Token