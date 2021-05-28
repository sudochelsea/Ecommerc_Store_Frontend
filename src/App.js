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
      let result = await fetch("https://fakestoreapi.com/products/1");
      const data = await result.json();
      setPostState(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <PostLoading isLoading={postState.loading} post={postState.post} />
      <ul>
        {/* {postState.map((item) => (
          <p>{item.product_price}</p>
        ))} */}
        <h1>Data</h1>
        <p> {postState.id}</p>
        {postState.title}
        <br />
        {postState.price}
        <br />
        {postState.description}
        <h1>end of Data</h1>
      </ul>
    </div>
  );
}

export default App;
