import { View, Text } from "react-native";
import { useContext, useEffect } from "react";
import { BlogContext } from "../App";

import { fetchPosts } from "../API";

export default function Timeline() {
  const context = useContext(BlogContext);

  // useEffect(() => {
  //   context.setPosts(fetchPosts(context.userId));
  // }, []);

  if (context.posts.length > 0) {
    return (
      <>
        {context.posts.map((post) => {
          return <Text>{post.title}</Text>;
        })}
      </>
    );
  } else {
    return (
      <View>
        <Text>No posts yet</Text>
      </View>
    );
  }
}
