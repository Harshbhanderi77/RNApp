import React from 'react';
import {Text, View} from 'react-native';
import {color} from '../../style/color';
import {AppSmalllogo} from './AppSmalllogo';
import {Logout} from './Logout';

export const Mainheader: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: color.white,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <AppSmalllogo />
      <Text
        style={{
          color: color.orange,
          fontSize: 24,
          fontWeight: '700',
        }}>
        FOOD APP
      </Text>
      <Logout />
    </View>
  );
};
