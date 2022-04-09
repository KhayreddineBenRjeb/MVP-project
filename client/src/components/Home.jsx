import React,{useEffect,useState} from 'react'
import axios from "axios"
export default function Home(props) {
  const [container,setContainer]=useState([])
  const showAllPosts=()=>{
    console.log(container)
    axios.get("http://localhost:3000/api/items/getall").then((result)=>{
      setContainer(result.data)
      console.log(result.data)
    }).catch(error=>{console.log(error)})
  
  }

  useEffect(()=>{showAllPosts()},[])

  const deletepost=(id)=>{
    axios.delete(`http://localhost:3000/api/items/delete/${id}`).then((result)=>{
        res.send(result)
         })
        .catch((err)=>{
          console.log(err)
    })
}
  return (
    <div>
      
      
      {console.log(container)}
      {container.map((data, i) =>{  
        return (
              <div className="post" key={i}>
                <p>{data.username}</p>
                <p className="username"> {data.plan}</p>
                <p className="username"> {data.country}</p>
                <p className="username"> {data.country_des}</p>
                <p className="username"> {data.description}</p>
                <p className="username"> {data.contact}</p>
                <button onClick={()=>{deletepost(data.id)}}>Delete</button>
              </div>
            )})} 
            <button onClick={()=>props.setIndex(1)}>Add a post</button>
    </div>
  )
}

