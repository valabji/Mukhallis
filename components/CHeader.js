import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Feather, FontAwesome, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from 'i18n-js';
import Colors from '../constants/Colors';

export default function CustomHeader({ title, logo, isHome, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 64, backgroundColor: Colors.WHITE }}>
      {
        isHome ?
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
            >
              <Feather
                name="menu"
                size={30}
                style={{ marginLeft: 20 }}
                color="#222"
              />
            </TouchableOpacity>
          </View>
          :
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Feather
                name="arrow-left"
                size={30}
                style={{ marginLeft: 5 }}
                color="#222"
              />
            </TouchableOpacity>
          </View>
      }
      <View style={{ flex: 1.5, justifyContent: 'center', alignItems: "center" }}>
        {/* <Text style={{ textAlign: 'center', fontFamily: "Cairo_400Regular", fontWeight: "500", fontSize: 18 }}>{title}</Text> */}
        <Image
          source={require("../assets/images/Logo.png")}
          style={{
            width:140,
            height:50,
            resizeMode:"contain",
            // backgroundColor:"red",
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "flex-end" }}>
        <TouchableOpacity
        // onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons
            name="cart-outline"
            size={32}
            style={{ marginRight: 20 }}
            color="#222"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
