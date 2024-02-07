import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Cart, ProductDetails } from "../screens/index";
import { COLORS, SIZES } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  MenuActive,
  MenuInactive,
  ShoppingBagActive,
  ShoppingBagAsh,
} from "../assets/svg/svg";
import Account from "../screens/Account";
import ProductOpen from "../screens/ProductOpen";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,

    height: 70,
  },
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="home-outline"
                size={20}
                color={focused ? COLORS.primary : COLORS.gray}
              />

              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 14,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? <MenuActive /> : <MenuInactive />}

              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 14,
                }}
              >
                Menu
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {focused ? <ShoppingBagActive /> : <ShoppingBagAsh />}

              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 14,
                }}
              >
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/240e/936f/bf19023ceaf3b1b53994ad27bf829c22?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=irDTrhHk~YHXLP0vzhAVzjOdKmlBj816GKXKvUP94zeFZIXjjhQJjWHEgJyjWXOdb6qqMCUOrdIyjBCZOtMZ5seqBakeDFA9UjUDyAGbmJbb5izdH-E0nCyMRO7vZ-4z4MIXAIWhrTEUIR80pEyd0KoZapesLZQkvQLH9jhaO29FQ~05qeUmC1iGQ-4URRwBeJq05b~L8rNC-f~2XzCy6eK0BaBMoZ8IhaGM2QBOJN-ULqlwfDsgFwPzDQywoTXX50C4qWDs908Q7pXi2JGCw1Whpnll4-L2db8I8sAkcZEsf1pRko6VXH78o63wC8bzaA~sVnEAh33kPHkiKxJbQA__",
                }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 24,
                }}
              />

              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray2,
                  fontSize: 14,
                }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
