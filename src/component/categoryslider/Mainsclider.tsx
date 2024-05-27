import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/Navigation';
import {Images} from '../../assets/pngimg/images';

const ImageArray = [
  {
    Id: 1,
    CategoryName: 'Gujrati',
    CategoryImage: Images.maingujrati,
  },
  {
    Id: 2,
    CategoryName: 'Panjabi',
    CategoryImage: Images.mainpanjabi,
  },
  {
    Id: 3,
    CategoryName: 'Chaines',
    CategoryImage: Images.mainchines,
  },
  {
    Id: 4,
    CategoryName: 'South Indian',
    CategoryImage: Images.mainsouth,
  },
  {
    Id: 5,
    CategoryName: 'Mexican ',
    CategoryImage: Images.mainmexicon,
  },
];
export const Mainsclider: React.FC = () => {
  return (
    <View style={{backgroundColor: color.white}}>
      <Text style={styles.Mainname}>Food Category</Text>
      <FlatList
        data={ImageArray}
        extraData={ImageArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{backgroundColor: color.white}}>
              <View style={styles.Maincontainer}>
                <Pressable
                  onPress={() =>
                    navigate({
                      screenName: Routes.ItemCategory,
                      params: {
                        categoryId: item.Id,
                      },
                    })
                  }>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={styles.Itmeimage}
                      source={item.CategoryImage}
                    />
                  </View>
                </Pressable>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.Itemname}>{item.CategoryName}</Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.CategoryImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Mainname: {
    color: color.black,
    fontSize: 22,
    fontWeight: '600',
    margin: 5,
    marginHorizontal: 8,
  },
  Maincontainer: {
    marginHorizontal: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  Itmeimage: {
    height: 60,
    width: 60,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  Itemname: {
    color: color.black,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
});
