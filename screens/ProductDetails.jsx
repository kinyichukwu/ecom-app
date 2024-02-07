import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";

import SearchComponent from "../components/product-details/search-input";
import Product from "../components/product-details/product";
import TopBarMenu from "../components/product-details/TopBarMenu";

const productData = [
  {
    name: "African Dou...",
    price: "£30",
    image:
      "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
  },
  {
    name: "Riro",
    price: "£30",
    image:
      "https://s3-alpha-sig.figma.com/img/b9c6/c267/1723fca06277aa180afddf41cfc06065?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GHfryBK4ATge4tisr9iPrMKEaq3kgDS5d4ObwRXUidD26nQVLs8dBuXH99H4dbPlIFfudRsSs8SeBnf9GZ0XFWP51tM1dMlyED1BXnCEzIErn9DmDNHO2A51frJY8v72-Fy3qsseovnN1HKbDFu5uAQPUiA6dXfeBsGbIHzlL0JY1v0lQPAMGwF530M9EgAZnSp3W5MfmkiD0hW7Sq5-5VtofkCeWHEcWYrYnOcFldViXF0oMdbQopxcuOHoEsPdAQ43v0GWrUqnYo0-AJULMoEcReN4iLXx3SBq1LBNX6oFosl-9BaZts42h9~WrS5~UuJqjxIhel2cAu3wU4420g__",
  },
  {
    name: "Asaro (Yam...",
    price: "£30",
    image:
      "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
  },
  {
    name: "Chicken Stew",
    price: "£30",
    image:
      "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
  },
  {
    name: "Asaro (Yam...",
    price: "£30",
    image:
      "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
  },
  {
    name: "Asaro (Yam...",
    price: "£30",
    image:
      "https://s3-alpha-sig.figma.com/img/3fee/85b8/767c901f27b0dbe26a76f3d5cc1f80ae?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AiYgo8fIhKsYKmgWbAhy80eVh7oysWN7dNW-K46fh~jDX51vU1ICwu13ya0BSgxK-KI2Mi0UAzhtbm2pw1Qjy2EVyUQzXx5tYi0wtAg6DNIdETI052HMWxyZ0QSS3w--f7QJFGBopQGIa4G5qmLqUKlel1WrgZHvkQBTp9Kqd-nU3tNipBQ4syg80cFmoH2nt3fv1jFdzK2WoNrmU5NbE2Lbz2o3~AB2CALxmu7OZJRhcZioDJinEP~JQ~kvDbmeAqiUqwuOv1VVOR6h57VjOWVimZAw6xUoGP5EyfP6o0ybYpc4LGCnRLKtWhdhiC3aFd0x8pDifWSNgWr3VT3g8g__",
  },
];

const ProductDetails = () => {
  return (
    <SafeAreaView style={styles.biggestContainer}>
      <TopBarMenu />
      <View style={styles.container}>
        <SearchComponent />

        <ScrollView
          contentContainerStyle={styles.productContainer}
          horizontal={false}
        >
          <FlatList
            data={productData}
            renderItem={({ item, index }) => (
              <View style={styles.row}>
                <Product
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
                <Product
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              </View>
            )}
            keyExtractor={(index) => ` ${index}`}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  biggestContainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
  },
  productContainer: {
    flexDirection: "column",
    flexGrow: 1,
    paddingBottom: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
});
