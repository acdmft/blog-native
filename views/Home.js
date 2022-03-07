import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { BlogContext } from "../App";

// Components
import Navbar from "../components/Navbar";
// views
import Timeline from "./Timeline";
import Profile from "./Profile";
import AddPost from "./AddPost";
import Login from "./Login";

export default function Home() {
  const [view, setView] = useState("Home");
  // Navigation function (shows Home, Profile or AddPost view)
  const handlePress = (view) => {
    setView(view);
  };

  const context = useContext(BlogContext);
  const logOut = () => {
    context.setIsLoggedIn();
    context.setUserId("");
    setView("Login");
  };

  switch (view) {
    case "Home":
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          {context.isLoggedIn && 
            <View>
              <Text>User id: {context.userId} </Text>
              <TouchableOpacity style={styles.btn} onPress={logOut}>
                <Text>Log out</Text>
              </TouchableOpacity>
            </View>
          }

          <Timeline />
          <Navbar
            getHome={() => handlePress("Home")}
            getPost={() => handlePress("AddPost")}
            getProfile={() => handlePress("Profile")}
          />
        </View>
      );
      break;
    case "AddPost":
      return (
        <View style={styles.container}>
          <AddPost />
          {context.isLoggedIn ? <Text>User id: {context.userId} </Text> : null}
          <Navbar
            getHome={() => handlePress("Home")}
            getPost={() => handlePress("AddPost")}
            getProfile={() => handlePress("Profile")}
          />
        </View>
      );
      break;
    case "Profile":
      return (
        <View style={styles.container}>
          <Profile />
          {context.isLoggedIn ? <Text>User id: {context.userId} </Text> : null}
          <Navbar
            getHome={() => handlePress("Home")}
            getPost={() => handlePress("AddPost")}
            getProfile={() => handlePress("Profile")}
          />
        </View>
      );
      break;
    case "Login":
      return (
        <>
        <Login />
        </>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    borderColor: "#a50fc4",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
  },
});
