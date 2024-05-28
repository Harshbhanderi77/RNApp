import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/pngimg/images';
import {replace, Routes} from '../../screennavigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Logout: React.FC = () => {
  return (
    <View style={{margin: 10}}>
      <Pressable
        style={{
          backgroundColor: color.green,
          padding: 8,
          borderRadius: 24,
          elevation: 12,
        }}
        onPress={async () => {
          await AsyncStorage.setItem('login', 'false');
          replace({screenName: Routes.Login});
        }}>
        <Image
          source={Images.logout}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </Pressable>
    </View>
  );
};
