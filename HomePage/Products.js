import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useCart } from "../CartContext";

function ProductCard({ product, navigation }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', { product })}>
      <View style={styles.card}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.name}>{product.title}</Text>
        {/* <Text style={styles.description}>{product.description}</Text> */}
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity style={styles.addProduct} onPress={addToCart}>
          <Image style={styles.addButton} source={require('../assets/add_circle.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching products:', error);
        Alert.alert('Error', 'Failed to fetch products. Displaying mock data.');
        
const products = [
  {id: '1', image: '../assets/dress1.png', title: 'Office Wear', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '2', image: '../assets/dress1.png', title: 'Black', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '3', image: '../assets/dress1.png', title: 'Church Wear', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '4', image: '../assets/dress1.png', title: 'Lamerei', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '5', image: '../assets/dress1.png', title: '21WN', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '6', image: '../assets/dress1.png', title: 'Lopo', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '7', image: '../assets/dress1.png', title: '21WN', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
  {id: '8', image: '../assets/dress1.png', title: 'Lame', description: 'Reversible angora cardigan', price: 120, content: '', category: 'clothing'},
];
setProducts(products);
});
}, []);

return (
<View style={styles.container}>
{products.length > 0 ? (
<FlatList
  data={products}
  renderItem={({ item }) => 
  <ProductCard key={item.id} product={item} navigation={navigation} 
  />}
  keyExtractor={item => item.id.toString()}
  numColumns={2}
  columnWrapperStyle={styles.column}
/>
) : (
<Text>Loading products...</Text>
)}
</View>
);
}

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 15,
bottom: -1,
},
card: {
width: '60%',
marginBottom: -40,
padding: 10,
paddingLeft: 10,
backgroundColor: '#fff',
alignItems: 'flex-start',
right: 20,
},
image: {
width: 170,
height: 240,
},
name: {
fontSize: 16,
fontWeight: '300',
marginVertical: 10,
marginLeft: 10,
textAlign: 'left',
left: 4,
},
description: {
fontSize: 13,
color: '#737373',
textAlign: 'left',
left: 4,
bottom: 3,
fontWeight: '300',
},
price: {
fontSize: 16,
fontWeight: '300',
color: '#D18035',
marginVertical: 5,
marginLeft: 12,
textAlign: 'left',
left: 4,
bottom: 5,
},
addButton: {
width: 30,
height: 30,
bottom: 132,
left: 125,    
},
});