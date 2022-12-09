import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
    const {id} = useParams();

    const BASE_URL="https://jsonplaceholder.typicode.com/"
    const [post,setPost]=useState({});
    const [autor, setAutor] = useState({});

    async function cargarPost() {
        fetch(BASE_URL+"posts/"+id)
        .then(resp=>resp.json())
        .then(resp => {
            setPost(resp)
            cargarAutor(resp.userId)
        })
    };

    async function cargarAutor(userId) {
        fetch(BASE_URL+"users/"+userId)
        .then(resp=>resp.json())
        .then(resp=>setAutor(resp))       
    }
    useEffect(()=>{  
       cargarPost();
    },[id])
    
    return(
        <>
        <h1>Post</h1>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <h4>{autor.name} </h4>
        <h5>{autor.email}</h5>
        </>
    )

}export{BlogPost}