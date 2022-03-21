import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/product";
import { setCart } from "../redux/cart";

const ProductList = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch(setProduct(json)))
      .catch(console.log("try again"));
  };

  return (
    <View style={styles.itemLeft}>
      <ScrollView style={styles.productsWrapper}>
        {product
          ? product.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => dispatch(setCart(item))}>
                <View>
                  <Image
                    style={styles.images}
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Text style={styles.itemText}>{item.title}</Text>
                  <Text>{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productsWrapper: {
    height: 400,
  },
  images: {
    width: 100,
    height: 100,
  },
});

export default ProductList;
