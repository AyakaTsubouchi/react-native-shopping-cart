import React, { useEffect } from "react";
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cart";

export default function Cart({ cartItems }) {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showSum = () => {
    let sum = 0;
    cart.map((item) => (sum += item.price * item.quantity));
    return "$" + sum;
  };

  return (
    <View style={styles.cartWrapper}>
      <Text>Cart</Text>
      {cart ? (
        cart.map((item) => (
          <View key={item.id}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>

            <TouchableOpacity onPress={() => dispatch(deleteCart(item))}>
              <Text>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{item.quantity}</Text>
            <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text>Cart is empty</Text>
      )}
      <Text>{showSum()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cartWrapper: {
    backgroundColor: "gray",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
