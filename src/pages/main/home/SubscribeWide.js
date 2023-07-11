import React, { useState } from "react";
import axios from 'axios';

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if (email.length === 0){
      alert("Email has left Blank!");
      
    }
    else {
      const url = "https://kfjrgwgp4a.execute-api.eu-west-2.amazonaws.com/dev"
      axios.post(url, {action:"subscribe", name:name, email:email}).then((response) => console.log(response).catch((error)=>console.log(error)))
      setName(""); 
      setEmail("");
    }
  }

  return (
    <div className="subscribeFlex">
      <div style={{ position: "relative" }}>
        <div className="subscribeBox">
          <div className="stayTuned">Stay tuned</div>
          <div className="wantToReceiveUpdates">
            Want to receive updates of the blog directly in your inbox?
            Subscribe now!
          </div>
          <div className="inputFlex">
            <input
              className="inputName"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              style={{ width: "calc(var(--subscribeWideWidth)*0.2)" }}
            ></input>
            <div
              style={{ width: "calc(var(--subscribeWideWidth)*0.05)" }}
            ></div>
            <input
              className="inputEmail"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "calc(var(--subscribeWideWidth)*0.75)" }}
            ></input>
          </div>
          <button className="subscribeButton" onClick={handleSubmit}>
            Subscribe
          </button>
        </div>
        <div className="decor"></div>
      </div>
    </div>
  );
}
