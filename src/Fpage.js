import React, { Component } from 'react';
import {useState} from 'react'
import './fpage.css';

export function Fpage(){
    const [text, setText] = useState("")
    const [po, setpo] = useState(0);
    const handleonchange=(event)=>{console.log("on change");
setText(event.target.value);
}
const switches=()=>{
    document.getElementById('button').remove();
    document.getElementById('myBox').remove();
   setpo(1);
   console.log(po);
}

    return(
<>
  
  <div className="container" id="header">
    <h1>Area he visited yesterday for marketing</h1>
   </div>
   <div className="container" >
    <textarea className="form-control my-3" id="myBox" rows="2" value={text} onChange={handleonchange}></textarea>
    </div>
    <br />
    <br />
    <br />
    <div className="container" >
    <button type="button" id="button" className="btn btn-dark" onClick={switches} style={{marginLeft:100}}>
      <a href="/about" style={{ color: "whitesmoke" }}>
        Next
      </a>
    </button></div><br></br>
    <div className="container" ><p id="footer">{po===0?" ":text}</p></div>
 
</>

   ) }
