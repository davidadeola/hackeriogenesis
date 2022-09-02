import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";

import Button from "./button";

import SearchIcon from "../assets/search.png";

const Nav = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <View style={styles.nav}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <TextInput
        style={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Post"
      />
      <Button
        onPress={() => navigation.navigate("Posts")}
        style={styles.button}
      >
        <ImageBackground style={styles.icon} source={SearchIcon} />
      </Button>
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
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Nav;
