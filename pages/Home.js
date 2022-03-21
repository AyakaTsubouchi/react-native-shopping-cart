import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ProductList from "../components/ProductList";
import Cart from "./Cart";

export default function Home({ navigation }) {
  return (
    <View style={styles.appWrapper}>
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
      <Text style={styles.storeName}>Store Name</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginTop: 40,
  },
  storeName: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  productsWrapper: {
    height: 400,
  },
  images: {
    width: 100,
    height: 100,
  },
  cartWrapper: {
    backgroundColor: "gray",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
