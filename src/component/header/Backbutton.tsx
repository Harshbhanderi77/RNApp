import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/pngimg/images';
import {goBack} from '../../screennavigation/Navigation';

export const Backbutton: React.FC = () => {
  return (
    <View style={{position: 'absolute', margin: 20}}>
      <Pressable
        onPress={() => goBack()}
        style={{
          backgroundColor: color.green,
          borderRadius: 50,
          padding: 10,
          elevation: 12,
        }}>
        <Image
          source={Images.backbtn}
          style={{
            width: 26,
            height: 26,
          }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
