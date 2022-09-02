import { useState, useEffect, useCallback } from "react";

// React Native Functions
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

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
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      setIsLoading(true);
      const dataArray = await getData(20);
      setData(dataArray);
      setIsLoading(false);
    };

    handleData();
  }, []);

  return (
    <ScrollView>
      <StatusBar style="dark" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Nav
          data={data}
          setData={setData}
          {...{ hasSearched, setHasSearched }}
        />

        {isLoading ? (
          <View style={{ width: 500, height: 500 }}>
            <Lottie source={require("../assets/loader.json")} autoPlay loop />
          </View>
        ) : (
          <Posts results={data} setData={setData} hasSearched={hasSearched} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default PostScreen;
