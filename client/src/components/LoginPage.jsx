import React from 'react'
import axios from 'axios'

export default function LoginPage(props) {
    const [username, setName] = React.useState("");
  const [password, setPassword] = React.useState("")
  const signin=()=>{
      axios.post('http://localhost:3000/api/items/signin',{email:username,password:password})
      .then(response=>{
        console.log(response.data);
        if(response.data[0]==='succesfully connected'){
            props.setUser(response.data[1])
            props.setIndex(2)}
        }  
        )
      .catch((err)=>{console.log(err)
    })

      }
    return (
        <div className="login">
            <h1 className="title">TRIPINI</h1>

        <div className="login-form">
            <h2>Login</h2>
                <p>
                    <label>email address</label><br/>
                    <input className="usernamef" type="text" name="username" value={username} onChange={(event) => setName(event.target.value)} required />
                    {/* {console.log(username)} */}
                </p>
                <p>
                    <label>Password</label>
                    
                    <br/>
                    <input className="password" type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)}  required />
                    {console.log(password)}
                </p>
                <p>
                    <button id="sub_btn" onClick={signin}>Login</button>
                </p>
            
           
                <p  onClick={()=>props.setIndex(4)}>First time? Create an account.</p>
                
           
        </div>
        </div>
    )
}