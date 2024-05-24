import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {Images} from '../../assets/pngimg/images';
import {goBack} from '../../screennavigation/Navigation';

interface CartheaderProps {
  label: string;
}

export const CustomHeader: React.FC<CartheaderProps> = ({label}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()} style={styles.backButton}>
        <Image source={Images.backbtn} style={styles.backButtonImage} />
      </Pressable>
      <Text style={styles.headerText}>{label}</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: color.gray1,
    margin: 8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    backgroundColor: color.green,
    borderRadius: 50,
    padding: 8,
    elevation: 12,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  headerText: {
    color: color.orange,
    fontSize: 20,
    fontWeight: '600',
  },
});
