import React from "react";
import { StyleSheet, Text, ScrollView, View, Image, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons"; // Assuming you're using Expo for vector icons

const SearchComponent = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={17} color="#858585" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#858585"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1E5E9",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
    marginLeft: 25,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
});

export default SearchComponent;
