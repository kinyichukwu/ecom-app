import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBarMenu from "../components/product-details/TopBarMenu";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TopBarMenu name="Home" />
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
          }} // Replace with your image URL
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Our App</Text>
          <Text style={styles.description}>
            Explore our amazing collection of products and discover great deals!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ProductDetails")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#4A4A4A",
  },
  button: {
    backgroundColor: "#DB3C25",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Home;
