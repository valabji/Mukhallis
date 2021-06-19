import * as React from 'react';
import CustomHeader from '../components/CHeader'
import { Text, View, SafeAreaView, TextInput } from 'react-native'
import { StackActions } from '@react-navigation/native';
import Fonts from '../constants/Fonts';
import styles, { SIZES } from '../constants/Style';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1,backgroundColor:Colors.WHITE }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={18} color={Colors.DGray} />
          <TextInput
            // value={email}
            placeholder="Start searching for real brands"
            style={styles.search}
            placeholderTextColor={Colors.DGray}
            // onChangeText={value => setEmail(value)}
          />
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
