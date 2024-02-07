import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Assuming you're using Expo for vector icons


const TopBarMenu = ({ name = "", hide = false, padding = false, navigation, place = 'ProductDetails' }) => {
  return (
    <View style={{ ...styles.container, paddingHorizontal: padding ? 20 : 0 }}>
      {hide && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(place)}>
          <AntDesign name="left" size={18} color="#131313" />
        </TouchableOpacity>
      )}
      <Text
        style={{
          ...styles.text,
          paddingVertical: 10,
          right: hide ? 20 : 0,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF", // Background color of the top bar
    paddingVertical: 10,
    borderBottomColor: "#E1E5E9",
    borderBottom: 1,
  },
  backButton: {
    borderWidth: 1,
    borderColor: "#E1E5E9",
    backgroundColor: "#fff", // Background
    padding: 10,
    borderRadius: 8, // Adjust border radius as needed
  },
  text: {
    flex: 1, // Take remaining space
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default TopBarMenu;
