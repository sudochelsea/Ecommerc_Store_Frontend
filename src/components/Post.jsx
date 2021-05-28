import React from 'react';
import "./Post.css";
import {useEffect, useState} from 'react';

const Posts = (props) => { 
const[postState, setPostState] = useState([])

console.log(postState)
  return(

    <div>
          
          <ul>
            {postState.map( (item) =>
            ( <p>{item.product_price}</p> )
               )}
            <h1>hey</h1>
        </ul>
        
</div>
  )}


export default Posts