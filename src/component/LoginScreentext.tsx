import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../style/color';

export const LoginScreentext: React.FC = () => {
  return (
    <View style={{top: 0}}>
      <Text style={styles.maintext}>
        Wellcome to out
        {'\n'}Food App
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  maintext: {
    fontFamily: 'styleUpdater',
    color: color.orange,
    marginTop: 18,
    fontSize: 32,
    fontWeight: '700',
    marginHorizontal: 12,
  },
});
