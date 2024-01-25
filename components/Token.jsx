import React, { useState } from 'react';
import axios from "axios"; 

const Token = () => {
  const [url,setUrl]=useState('');
  const [profileData, setProfileData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}


  return (
    <div style={{display:'flex',justifyContent:'center',
    flexDirection:'column',textAlign:'center'}} >
      <h2>Enter the URL:</h2>
      <input style={{outline:'none',border:'0',textDecoration:'underline',width:'41em',backgroundColor:'#ebebeb',heigth:'14em'}} onChange={(e)=>{setUrl(e.target.value)}}></input>
      <span id='separator'></span>
      <button onClick={getData} style={{backgroundColor:'#ebebeb',border:'1px solid black',borderRadius:'2px',marginTop:'32px'}}>Check</button>
      {profileData && <div>{profileData.profile_name}</div>}
         </div>
  )
}

export default Token