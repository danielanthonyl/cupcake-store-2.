import {View, StyleSheet} from 'react-native';
import productListMock from '../../mocks/productList.json';
import Text from '../../components/texts/Text';
import {toBRLCurrency} from '../../helpers/toBRLCurrency';

export const CartSummaryList = () => {
  return (
    <View style={styles.container}>
      {/* cart reduce goes here */}
      {productListMock.map(({id, quantity, totalPrice, ingredients, title}) => (
        <View key={id} style={styles.cardItem}>
          <Text style={styles.quantity}>{quantity}x</Text>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.ingredients} numberOfLines={1}>
              {ingredients}
            </Text>
          </View>

          <Text style={styles.price}>{toBRLCurrency(totalPrice)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ingredients: {
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantity: {
    color: '#4F4F4F',
    fontSize: 14,
  },
  container: {
    backgroundColor: '#F1C7CE',
    borderRadius: 23,
    padding: 20,
  },
  cardItem: {
    flexDirection: 'row',
    gap: 10,
  },
  titleContainer: {
    maxWidth: 300,
    marginBottom: 20,
  },
  price: {
    marginLeft: 'auto',
  },
});
