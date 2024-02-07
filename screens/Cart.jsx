import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBarMenu from "../components/product-details/TopBarMenu";
import { Button } from "react-native-paper";
import { SIZES } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

import { Minus, Plus, ArrowDown } from "../assets/svg/svg";

const Cart = () => {
  return (
    <SafeAreaView>
      <TopBarMenu name="Cart" hide={true} padding={true} />
      <ScrollView
        contentContainerStyle={styles.productContainer}
        horizontal={false}
      >
        <View>
          <ProductDetailsPage
            product={{
              name: "African Donut Mix (Puff Puff)",
              price: "£30",
              image:
                "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
              description:
                "Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....",
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const ProductDetailsPage = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <Image source={{ uri: product.image }} style={styles.cartImage} />

        <View style={styles.cartTextContainer}>
          <View style={styles.cartInnerTextContainer}>
            <Text style={{}}>Asaro (Yam Porridge)</Text>
            <Minus />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 25, marginTop: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Minus />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: "medium",
              fontSize: 14,
              marginVertical: 10,
              textAlign: "center",
              flex: 1,
              color: "#151515",
            }}
          >
            1
          </Text>

          <TouchableOpacity>
            <Plus />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          buttonColor={"#DB3C25"}
          onPress={() => console.log("Add to cart")}
          style={{ marginBottom: 16 }}
        >
          Checkout - £90
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cartContainer: { padding: 8, display: "flex", flexDirection: "row" },
  cartImage: {
    width: 92,
    height: 92,
  },
  cartTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  cartInnerTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonContainer: {
    marginBottom: 170,
  },
});

export default Cart;
