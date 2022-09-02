import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { baseStyles } from "../styles/baseStyles";
import CustomText from "../components/customText";

const Post = ({ story }) => (
  <CustomText style={styles.post} onPress={() => Linking.openURL(story.url)}>
    <CustomText style={styles.heading2}>{story.title}</CustomText>
    <CustomText>
      Posted By: {story.by} at{" "}
      {new Date(parseInt(story.time) * 1000).toLocaleString()}
    </CustomText>
  </CustomText>
);

const Posts = ({ results }) => {
  return (
    <View style={baseStyles.container}>
      {results?.map((story, index) => (
        <Post key={index} story={story} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "red",
  },
  heading2: {
    fontSize: 32,
  },
});

export default Posts;
