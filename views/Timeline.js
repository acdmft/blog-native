import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { BlogContext } from "../App";

// import { fetchPosts } from "../API";

export default function Timeline() {
  const context = useContext(BlogContext);

  // useEffect(() => {
  //   context.setPosts(fetchPosts(context.userId));
  //   console.log('timeline')
  // }, []);
  // console.log(context.posts);
  // return <><Text>Id of user {context.posts}</Text></>

  return context.posts.length > 0 ? (
      <FlatList
        style={styles.list}
        data={context.posts}
        renderItem={(data) => (
          <>
          <Text>User Id: {data.item.userId}</Text>
          <Text>Title: {data.item.title}</Text>
          <Text>Text: {data.item.body}</Text>
          </>
        )}
        keyExtractor={(_data, index) => index.toString()}
      />
        
    ) : (
    <ActivityIndicator size="large" color="red" />
    );
  
}

const styles = StyleSheet.create({
  list: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  }
})