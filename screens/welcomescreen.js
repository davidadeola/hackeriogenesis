import {
  StyleSheet,
  View,
  Linking,
  ImageBackground,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "../components/button";

import RightArrow from "../assets/right-arrow.png";
import CustomText from "../components/customText";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <StatusBar style="light" />
      <CustomText style={styles.headingStyle}>
        Get the latest posts in Tech
      </CustomText>
      <CustomText style={styles.courtesyText}>
        Courtesy of{" "}
        <CustomText
          style={styles.courtesySubText}
          onPress={() => Linking.openURL("https://news.ycombinator.com/")}
        >
          HackerNews
        </CustomText>
      </CustomText>
      <Button
        onPress={() => navigation.navigate("Posts")}
        style={styles.button}
      >
        <ImageBackground style={styles.icon} source={RightArrow} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: Dimensions.get("window").height,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6600",
  },
  headingStyle: {
    fontSize: 80,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    color: "#f6f6ef",
  },
  courtesyText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "500",
    color: "#f6f6efaa",
    marginTop: 20,
  },
  courtesySubText: {
    color: "#00000099",
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#f6f6ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    marginTop: 100,
    paddingTop: Platform.OS === "ios" ? 5 : 0,
    paddingLeft: Platform.OS === "ios" ? 5 : 0,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default WelcomeScreen;
