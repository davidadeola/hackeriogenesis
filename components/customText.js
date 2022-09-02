import { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

export default function CustomText({ children, style, ...props }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
      });
      setLoaded(true);
    }

    loadFonts();
  }, []);

  if (!loaded) {
    return (
      <Text style={style} {...props}>
        {children}
      </Text>
    );
  }

  return (
    <Text style={{ fontFamily: "Poppins-Bold", ...style }} {...props}>
      {children}
    </Text>
  );
}
