import React from 'react';
import {StyleSheet, View} from 'react-native';
import {color} from '../style/color';
import {Mainheader} from '../component/header/Mainheader';
import {Mainsclider} from '../component/categoryslider/Mainsclider';
import {ItemSlider} from '../component/categoryslider/ItemSlider';

export const HomeScreen: React.FC = () => {
  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <Mainheader />
      <Mainsclider />
      <ItemSlider />
    </View>
  );
};

const styles = StyleSheet.create({});
