import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { WhiteShoppingCart, AshLove } from "../../assets/svg/svg";
import { Button } from "react-native-paper";
import { COLORS, SIZES } from "../../constants/theme";

const Product = ({
  name = "African Dou...",
  price = "£30",
  image = "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.product}
      onPress={() => navigation.navigate("Product Open")}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ flex: 1 }}></Text>
        <AshLove />
      </View>

      <Image
        source={{
          uri: image,
        }} // Replace 'https://example.com/image.jpg' with the actual image URL
        style={styles.image}
      />

      <View
        style={{
          flexDirection: "row",
          fontWeight: "medium",
          fontSize: 14,
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <Text style={{ flex: 1, color: "#000" }}>{name}</Text>

        <Text style={{ color: "#DB3C25" }}>{price}</Text>
      </View>

      <Button
        icon={WhiteShoppingCart}
        mode="contained"
        onPress={() => navigation.navigate("Cart")}
        buttonColor={COLORS.primary}
        labelStyle={{
          fontWeight: "regular",
        }}
      >
        Add to cart
      </Button>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    width: "47%", // Adjust as needed based on desired spacing
    height: 228,
    backgroundColor: COLORS.red,
    borderRadius: 10,
    padding: SIZES.xSmall,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 21,
  },
  image: {
    width: 94.37,
    height: 94.37,
    resizeMode: "cover", // Adjust the resizeMode as needed (cover, contain, stretch, center)
    borderRadius: 10,
    marginBottom: 4,
  },
});
