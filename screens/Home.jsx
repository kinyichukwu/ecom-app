import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBarMenu from "../components/product-details/TopBarMenu";

const Home = () => {
  return (
    <SafeAreaView>
      <TopBarMenu name="Home" />
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
