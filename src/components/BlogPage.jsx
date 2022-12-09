import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogPage() {

    const [listPost,setListPost]=useState([]);

       
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(resp=>resp.json())
        .then(resp => setListPost(resp))
    },[])

    return(
        <Container>
            <h1>Blog Page</h1>
            <ul>
                {listPost.map(post=>(
                        <li key={post.id}>
                            <Link to={`/blog/${post.id}`}> {post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </Container>
    )
}export{BlogPage}