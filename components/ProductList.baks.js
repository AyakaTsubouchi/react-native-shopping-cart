import { useDispatch, useSelector } from "react-redux";
import { View, Text, Button } from "react-native";
import { setProduct } from '../redux/product';

const ProductList = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);
  const handlePress = () => {
    dispatch(setProduct("Product from Component"));
  };

  return (
    <View>
      <Text>{product}</Text>
      <Button title={"Set Message"} onPress={handlePress} />
    </View>
  );
};

export default ProductList;
