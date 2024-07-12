import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header(){
    const navigation = useNavigation();
    return(
        <>
        <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.menu} source={require('../assets/Menu.png')} />
      </TouchableOpacity>
      <View>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
      </View>
      <View style={styles.iconsContainer}>
        <Image style={styles.search} source={require('../assets/Search.png')} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
          <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')} />
        </TouchableOpacity>
      </View>
      </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        width: '100%',
        backgroundColor: '#fff',
      },
      menu: {
        width: 30,
        height: 33,
      },
      logo: {
        width: 99,
        height: 40,
      },
      iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      search: {
        width: 30,
        height: 30,
        marginRight: 20,
      },
      shoppingBag: {
        width: 30,
        height: 30,
      },

    bottomLine: {
        position: 'absolute',
        top: 80,
        width: 200,
        height: 60,
        alignSelf: 'center',
    },
})
