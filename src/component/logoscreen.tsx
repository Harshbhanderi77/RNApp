import React from 'react';
import {Image, Text, View} from 'react-native';
import {color} from '../style/color';
import {Images} from '../assets/pngimg/images';

export const Logoscreen: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        alignItems: 'center',
        position: 'relative',
        margin: 10,
      }}>
      <View
        style={{
          backgroundColor: color.white,
          padding: 10,
          borderRadius: 100,
          elevation: 16,
          borderWidth: 1,
          borderColor: color.green,
        }}>
        <View style={{position: 'relative'}}>
          <Image source={Images.applogo} style={{width: 100, height: 100}} />
        </View>
      </View>
      <Text style={{color: color.black, fontSize: 16, fontWeight: '600'}}>
        RN Food App
      </Text>
    </View>
  );
};
