import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/pngimg/images';

export const AppSmalllogo: React.FC = () => {
  return (
    <View style={{margin: 10}}>
      <View
        style={{
          backgroundColor: color.white,
          padding: 2,
          borderRadius: 24,
          elevation: 12,
          borderColor: color.green,
          borderWidth: 1,
        }}>
        <Image
          source={Images.applogo}
          style={{
            width: 36,
            height: 36,
          }}
        />
      </View>
    </View>
  );
};
