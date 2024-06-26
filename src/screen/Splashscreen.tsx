import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {color} from '../style/color';
import {replace, Routes} from '../screennavigation/Navigation';
import {Images} from '../assets/pngimg/images';
import {Logoscreen} from '../component/logoscreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splashscreen: React.FC = () => {
  const asa = async () => {
    const ss = await AsyncStorage.getItem('singup');
    if (ss === 'true') {
      replace({
        screenName: Routes.Home,
      });
    } else {
      replace({
        screenName: Routes.Login,
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      asa();
    }, 2000);
    return () => clearTimeout('timers');
  }, []);

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
          style={{width: '100%', height: 240, resizeMode: 'contain'}}
        />
      </View>

      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: color.black,
            fontSize: 34,
            fontWeight: '600',
            marginHorizontal: 12,
          }}>
          Order Your {'\n'}favorites food
        </Text>
        <Text
          style={{
            color: color.orange,
            fontSize: 20,
            fontWeight: '500',
            marginHorizontal: 12,
          }}>
          Eat fresh food and try to be healthy
        </Text>
      </View>

      {/*<Pressable*/}
      {/*  style={{*/}
      {/*    backgroundColor: color.white,*/}
      {/*    padding: 12,*/}
      {/*    justifyContent: 'center',*/}
      {/*    alignItems: 'center',*/}
      {/*    marginHorizontal: 14,*/}
      {/*    marginTop: 26,*/}
      {/*    borderRadius: 20,*/}
      {/*    flexDirection: 'row',*/}
      {/*  }}*/}
      {/*  onPress={() => replace({screenName: Routes.Login})}>*/}
      {/*  <Text*/}
      {/*    style={{*/}
      {/*      color: color.orange,*/}
      {/*      fontSize: 22,*/}
      {/*      fontWeight: '600',*/}
      {/*      marginRight: 10,*/}
      {/*    }}>*/}
      {/*    Get Start*/}
      {/*  </Text>*/}
      {/*  <Image source={Images.rightarrow} style={{width: 26, height: 26}} />*/}
      {/*</Pressable>*/}
    </View>
  );
};

const styles = StyleSheet.create({});
