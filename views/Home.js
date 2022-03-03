import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BlogContext } from "../App";

// Components
import Navbar from "../components/Navbar";

export default function Home() {
  const context = useContext(BlogContext);
  console.log(context.userId);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {context.isLoggedIn ? (<Text>User id: {context.userId} </Text>) : (null)}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: "center",
    justifyContent: "center",
  }
})