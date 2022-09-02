import React, { useState } from "react";
import { View, Linking, StyleSheet } from "react-native";
import { baseStyles } from "../styles/baseStyles";
import CustomText from "../components/customText";
import Button from "./button";
import { getData } from "../utils/dataHandler";
import Lottie from "lottie-react-native";

const Post = ({ story }) => (
  <View style={styles.post}>
    <CustomText
      style={styles.postContent}
      onPress={() => Linking.openURL(story.url)}
    >
      <View style={styles.textWrapper}>
        <CustomText style={styles.heading2}>{story.title}</CustomText>
      </View>
      <View style={styles.textWrapper}>
        <CustomText style={styles.details}>
          Posted By: {story.by} at{" "}
          {new Date(parseInt(story.time) * 1000).toLocaleString()}
        </CustomText>
      </View>
    </CustomText>
  </View>
);

const Posts = ({ results, setData, hasSearched }) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = async () => {
    setIsLoading(true);
    const newData = await getData(20, results.length);
    setData((prevData) => [...prevData, ...newData]);
    setIsLoading(false);
  };

  return (
    <View style={{ ...baseStyles.container, ...styles.container }}>
      {results?.map((story, index) => (
        <Post key={index} story={story} />
      ))}
      {isLoading ? (
        <View style={{ width: 120, height: 120 }}>
          <Lottie source={require("../assets/loader.json")} autoPlay loop />
        </View>
      ) : !results.length ? (
        <View>
          <CustomText style={styles.noResults}>No Results</CustomText>
        </View>
      ) : (
        <>
          {!hasSearched && (
            <Button style={styles.button} onPress={fetchMoreData}>
              <CustomText>Load more</CustomText>
            </Button>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  post: {
    width: 340,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "#f6f6ef",
    shadowColor: "#000a",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  postContent: {
    width: 340,
    paddingTop: 0,
    paddingBottom: 10,
  },
  textWrapper: {
    width: 340,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
  },
  heading2: {
    fontSize: 22,
    paddingTop: 10,
  },
  noResults: {
    fontSize: 30,
    color: "#0008",
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#ff6600",
    marginVertical: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  details: {
    color: "#0009",
  },
});

export default Posts;
