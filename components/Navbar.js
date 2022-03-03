import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#f1e05a",
    width: "100%",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    
  }, 
  btn: {
    borderColor: "#a50fc4",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 5
  }
})