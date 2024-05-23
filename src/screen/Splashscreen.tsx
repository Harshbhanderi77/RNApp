import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../style/color';
import {navigate, replace, Routes} from '../screennavigation/Navigation';
import {Images} from '../assets/pngimg/images';
import {Logoscreen} from '../component/logoscreen';

export const Splashscreen: React.FC = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     replace({
  //       screenName: Routes.Login,
  //     });
  //   }, 2000);
  //   return () => clearTimeout('timers');
  // }, []);
  return (
    <View
      style={{
        backgroundColor: color.green,
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Logoscreen />
      <View style={{marginTop: 16}}>
        <Image
          source={Images.splashscreenimg}
          style={{width: '100%', height: 300, resizeMode: 'contain'}}
        />
      </View>

      <View style={{marginTop: 12}}>
        <Text
          style={{
            color: color.black,
            fontSize: 46,
            fontWeight: '600',
            marginHorizontal: 12,
          }}>
          Order Your {'\n'}favorites food
        </Text>
        <Text
          style={{
            color: color.orange,
            fontSize: 20,
            fontWeight: '600',
            marginHorizontal: 14,
          }}>
          Eat fresh food and try to be healthy
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: color.white,
          padding: 12,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 14,
          marginTop: 26,
          borderRadius: 20,
          flexDirection: 'row',
        }}
        onPress={() => replace({screenName: Routes.Login})}>
        <Text
          style={{
            color: color.orange,
            fontSize: 22,
            fontWeight: '600',
            marginRight: 10,
          }}>
          Get Start
        </Text>
        <Image source={Images.rightarrow} style={{width: 26, height: 26}} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
