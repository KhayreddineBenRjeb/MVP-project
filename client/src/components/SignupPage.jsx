import React,{useState} from 'react'
// import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import axios from 'axios';

export default function SignUpPage(props) {
    const [name, setName] =useState("");
    const [email, setEmail]=useState("")
    const [password, setPassword] = useState("")
    
    const signup=()=>{
        if(email && name && password){
            axios.post("http://localhost:3000/api/items/signup",{
               username:name,
               email:email,
               password:password 
            }).then(result=>{
                console.log(result.data);
                if(result.data[0]==='yes'){
                    props.setUser(result.data[1])
                    props.setIndex(2)
                }
           }).catch(err=>{console.log(err)})
        }else{
            console.log("something is missing")
        }
    }

    return (
        <div className="text-center m-5-auto">
            
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
                    {console.log(name)}
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)} required />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit" onClick={signup}>Register</button>
                </p>
            
                <p onClick={props.setIndex(3)}>Back to login page</p>
            
        </div>
    )

}

