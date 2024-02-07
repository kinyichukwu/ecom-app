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

const Asaro = require("../assets/cart-images/Asaro.png");
const Riro = require("../assets/cart-images/Efo-roro.png");
const MoiMoi = require("../assets/cart-images/Moi Moi.png");

import {
  Minus,
  Plus,
  ArrowDown,
  MinusSmall,
  PlusSmall,
  DustBin,
} from "../assets/svg/svg";

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TopBarMenu
        name="Cart"
        hide={true}
        padding={true}
        navigation={navigation}
        place="ProductDetails"
      />
      <ScrollView
        contentContainerStyle={styles.productContainer}
        horizontal={false}
      >
        <View>
          <ProductDetailsPage
            product={{
              name: "Asaro",
              innerName: "(Yam Porridge)",
              price: "£30",
              image: Asaro,
            }}
          />
          <ProductDetailsPage
            product={{
              name: "Asaro",
              innerName: "(Yam Porridge)",
              price: "£30",
              image: Riro,
            }}
          />
          <ProductDetailsPage
            product={{
              name: "Asaro",
              innerName: "(Yam Porridge)",
              price: "£30",
              image: MoiMoi,
            }}
          />
        </View>

        <View style={{ padding: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 16, color: "#151515" }}>
              Total
              <Text style={{ color: "#4A4A4A" }}> (3 items)</Text>
            </Text>
            <Text style={{ fontSize: 16, color: "#151515" }}>£90</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const ProductDetailsPage = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <Image source={product.image} style={styles.cartImage} />

        <View style={styles.cartTextContainer}>
          <View style={styles.cartInnerTextContainer}>
            <Text style={{}}>
              {product.name}
              <Text style={{ color: "#4A4A4A" }}> {product.innerName}</Text>
            </Text>
            <MinusSmall />
          </View>
          <View style={styles.cartInnerTextContainer}>
            <Text style={{ color: "#DB3C25" }}>£30</Text>
            <Text style={{ width: 32, textAlign: "center", color: "#4A4A4A" }}>
              1
            </Text>
          </View>
          <View style={styles.cartInnerTextContainer}>
            <DustBin />
            <PlusSmall />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  cartContainer: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },
  cartImage: {
    width: 92,
    height: 92,
  },
  cartTextContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 4,
  },
  cartInnerTextContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {},
});

export default Cart;
