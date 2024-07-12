import React from 'react';
import Header from '../ProductDetailsScreen/Header'
import { useCart } from "../cartContext";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ProductScreen({ route }) {
  const { product } = route.params;

  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product }); 
    alert("Product Added")
  };

  return (
    <>
    <Header />
    <ScrollView>
    <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={require("../assets/Export.png")} />
        </View>        
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <View>
          <Text style={{fontWeight: '450', fontSize: 20, marginBottom: 10,}}>
            Materials
          </Text>
          <Text style={{fontWeight: '200', fontSize: 16,}}>
            We work with monitoring programmes to
            ensure compliance with safety, health and
            quality standards for our products.
          </Text>
        </View>
        <View style={{marginVertical: 15, marginBottom: 30,}}>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image source={require("../assets/Do Not Bleach.png")} />
            <Text style={{fontSize: 18, fontWeight: 200, marginHorizontal: 10}}> Do not use bleach </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image source={require("../assets/Do Not Tumble Dry.png")} />
            <Text style={{fontSize: 18, fontWeight: 200, marginHorizontal: 10}}> Do not tumble dry </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5}}>
            <Image source={require("../assets/Do Not Wash.png")} />
            <Text style={{fontSize: 18, fontWeight: 200, marginHorizontal: 10}}> Dry clean with tetrachloroethylene </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 5, }}>
            <Image source={require("../assets/Iron Low Temperature.png")} />
            <Text style={{fontSize: 18, fontWeight: 200, marginHorizontal: 10}}> Iron at a maximum of 110&deg;C/230&deg;F </Text>
          </View>
        </View>
        
        <View style={{flex: 1, width: 330, height: 1, backgroundColor: '#ccc', marginVertical: 10}}/>

        <View style={{marginTop:10, marginBottom: 50}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require("../assets/Shipping.png")}/>
            <Text style={{marginLeft: 15, fontSize: 18}}>Free Flat Rate Shipping</Text>
            <Image style={{left: 105}} source={require("../assets/Down.png")}/>
          </View>
          <Text style={{fontWeight: 200, fontSize: 15, marginLeft: 39 }}>Estimated to be delivered on</Text>
          <Text style={{fontWeight: 200, fontSize: 15, marginLeft: 39 }}>09/11/2021 - 12/11/2021.</Text>
        </View>
      </View>

      <View style={styles.footercontainer}>
        <TouchableOpacity onPress={addToCart}>
          <View style={styles.totalfooterContainer}>
            <Image style={{tintColor: 'white'}} source={require('../assets/Plus.png')} />
            <Text style={{color: 'white', fontSize: 21, }}>Add to Cart</Text>
            <Image source={require("../assets/Heart.png")} style={{tintColor: 'white', marginLeft: 120, height: 30, width: 30,}} />
            </View>
        </TouchableOpacity>
            
        </View>

    </ScrollView>
    </>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff'
  },

  footercontainer: {
    padding: 20,
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
},

  totalfooterContainer: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 30,
    alignItems: 'center',
},

  image: {
    width: 360,
    height: 480,
    resize: 'fit',
    marginBottom: 16,
  },
  title: {
    width: 320,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  price: {
    fontSize: 20,
    color: '#D18035',
    marginVertical: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: '200'
  },
});
