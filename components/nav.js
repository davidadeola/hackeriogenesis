import { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";

import Button from "./button";

import SearchIcon from "../assets/search.png";
import XMarkIcon from "../assets/xmark.png";

const Nav = ({ data, setData, hasSearched, setHasSearched }) => {
  const [isEditable, setIsEditable] = useState(true);
  const [initialData, setIntialData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const search = () => {
    if (!inputValue) return;
    setIsEditable(false);
    setIntialData(() => data);

    const regex = new RegExp(`${inputValue}`, "gi");

    const newData = data.filter((story) => regex.test(story.title));
    setData(newData);
    setHasSearched(true);
  };

  const cancelSearch = () => {
    setData(initialData);
    setHasSearched(false);
    setInputValue("");
    setIsEditable(true);
  };

  const handleInputChanges = (text) => {
    setHasSearched(false);
    setInputValue(text);
  };

  return (
    <View style={styles.nav}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChanges}
        placeholder="Search Post"
        editable={isEditable}
      />
      {hasSearched ? (
        <Button onPress={cancelSearch} style={styles.button}>
          <ImageBackground style={styles.icon} source={XMarkIcon} />
        </Button>
      ) : (
        <Button onPress={search} style={styles.button}>
          <ImageBackground style={styles.icon} source={SearchIcon} />
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 70,
    marginBottom: 40,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    elevation: 1,
  },
  logo: {
    flex: 1,
    width: 45,
    height: 45,
  },
  input: {
    flex: 4,
    backgroundColor: "#f6f6ef",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 13,
    fontSize: 20,
  },
  button: {
    width: 45,
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6600",
    borderRadius: 8,
    paddingTop: Platform.OS === "ios" ? 5 : 0,
    paddingLeft: Platform.OS === "ios" ? 2 : 0,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Nav;
