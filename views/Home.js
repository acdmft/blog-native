import { View, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { BlogContext } from "../App";

// Components
import Navbar from "../components/Navbar";
// views 
import Timeline from "./Timeline";
import Profile from "./Profile";
import AddPost from "./AddPost";

export default function Home() {
  const [view, setView] = useState("Home");
  // Navigation function
  const handlePress = (view) => {
    setView(view);
  };

  const context = useContext(BlogContext);

  switch (view) {
    case "Home":
      return (
        <View style={styles.container}>
          <Text>Home</Text>
          {context.isLoggedIn ? <Text>User id: {context.userId} </Text> : null}
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
