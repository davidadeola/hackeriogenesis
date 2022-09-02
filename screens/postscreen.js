import { useState, useEffect, useCallback } from "react";

// React Native Functions
import { StyleSheet, View, ScrollView } from "react-native";

// Components
import Nav from "../components/nav";
import Posts from "../components/posts";
import Lottie from "lottie-react-native";

// Functions
import { getData } from "../utils/dataHandler";

// Assets
import RightArrow from "../assets/right-arrow.png";

const PostScreen = () => {
  const [data, setData] = useState([]);

  const handleData = useCallback(async () => {
    const dataArray = await getData(20);
    setData(dataArray);
  }, []);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Nav />

        {!data.length ? (
          <Lottie source={require("../assets/loader.json")} autoPlay loop />
        ) : (
          <Posts results={data} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default PostScreen;
