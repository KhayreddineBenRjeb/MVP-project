import React,{useState} from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/SignupPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Post from "./components/Post.jsx"
import Home from "./components/Home.jsx"

function App() {
  const [index,setIndex]=useState(3)
  const [user,setUser]=useState(null)

  return (
    <div>
      
      {index==1&&<Post setIndex={setIndex} user={user} />}
      {index==2&&<Home setIndex={setIndex}/>}
      {index==3&&<LoginPage setIndex={setIndex} setUser={setUser}/>}
      {index==4&&<SignupPage setIndex={setIndex} setUser={setUser}/>}
    </div >

  );
}

export default App;
