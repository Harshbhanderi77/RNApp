import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/pngimg/images';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export const AppSmalllogo: React.FC = () => {
  return (
    <View style={{margin: 10}}>
      <View
        style={{
          backgroundColor: color.white,
          padding: 0,
          borderRadius: 24,
          elevation: 12,
          borderColor: color.green,
          borderWidth: 1,
        }}>
        <Image
          source={Images.applogo}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
    </View>
  );
};
