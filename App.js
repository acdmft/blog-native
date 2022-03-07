import { NativeRouter, Routes, Route } from "react-router-native";
import { useState, createContext, useEffect } from "react";
// Views
import Home from "./views/Home";
import Login from "./views/Login";

import { fetchPosts } from "./API";

export const BlogContext = createContext("");

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);
  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };
  const contextValue = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: handleLoggedIn,
    userId: userId,
    setUserId: setUserId,
    posts: posts,
    setPosts: setPosts,
  };
  // returns Home or Login page depending on if the user is logged in
  const renderFirstPage= () => {
    return isLoggedIn ? (
      <Home context={contextValue} />
    ) : (
      <Login context={contextValue} />
    );
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => setPosts(res))
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  return (
    <BlogContext.Provider value={contextValue}>
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={renderFirstPage()} />
      </Routes>
    </NativeRouter>
    </BlogContext.Provider>
  )
}