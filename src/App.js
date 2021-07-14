import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Posts from "./components/Post";
import PostLoadingComponent from "./components/PostLoading";


function App(props) {
  const PostLoading = PostLoadingComponent(Posts);
  const [postState, setPostState] = useState([]);

  //which will allow you to perform side effect operations such as fetching data, clean up, or DOM manipulation
  useEffect(() => {
    const fetchData = async () => {
      //let result = await fetch("https://fakestoreapi.com/products/1");
      let result = await fetch("http://127.0.0.1:8000/products/");
      const data = await result.json();
      setPostState(data['products']); //acessing the list of all the products key 
      console.log(data['status']);
    };
    fetchData();
  }, []);

  return (

<   div className="App">
    
      {/* <PostLoading isLoading={postState.loading} post={postState.post} /> */}
      {postState.map((item) => (
        
          <div class="card border-primary mb-3" >
          <div class="card-header">{item.product_name}</div>
          <div class="card-body text-primary">
          <h5 class="card-title">{item.price}</h5>
          <p class="card-text">short desc</p>
          </div>
          </div>
      )  )}
      
    </div>
  );

}

export default App;
