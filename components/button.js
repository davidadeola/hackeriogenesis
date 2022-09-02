import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ children, onPress = () => {}, style }) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <View>
        <Text style={{ color: "white", fontWeight: "500", fontSize: 16 }}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
