import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { useNavigate } from "react-router-native";
import { useContext, useState } from "react";
import { BlogContext } from "../App";

export default function Login() {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();
  const context = useContext(BlogContext);

  const handleSubmit = () => {
    if (/\d+$/.test(inputVal) && parseInt(inputVal)>0 && parseInt(inputVal <=10)) {
      context.setIsLoggedIn();
      context.setUserId(inputVal);
      navigate("/");
    } else {
      Alert.alert('Id should contain only digits and be equal or less than 10!');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login page</Text>
      <TextInput
        style={styles.input}
        placeholder="Id"
        onChangeText={(text) => {
          setInputVal(text);
        }}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
});
