import { NativeRouter, Routes, Route } from "react-router-native";
import { useState, createContext } from "react";

import Home from "./views/Home";
import Login from "./views/Login";

export const BlogContext = createContext("");

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const handleLoggedIn = () => {
    setIsLoggedIn((prev) => !prev);
  };
  const contextValue = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: handleLoggedIn,
    userId: "",
    setUserId: setUserId,
  };
  // returns Home or Login page depending on if the user is logged in
  const renderFirstPage= () => {
    return isLoggedIn ? (
      <Home context={contextValue} />
    ) : (
      <Login context={contextValue} />
    );
  };

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