import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/Navigation';

const ImageArray = [
  {
    Id: 1,
    CategoryName: 'Gujrati',
    CategoryImage:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJZaXGHqJ0Bqkzg7hLPxgn9xczYhH0mkBZP_gYyBj0xGkgYPvQ',
  },
  {
    Id: 2,
    CategoryName: 'Panjabi',
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgkAk5PUJWgGvbiINJo6hcsmMQAGVOLlKYQ&usqp=CAU',
  },
  {
    Id: 3,
    CategoryName: 'Chaines',
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrl2gVFi9Du1gJ2isjGwpP6L-wckbJNxP4A&usqp=CAU',
  },
  {
    Id: 4,
    CategoryName: 'South Indian',
    CategoryImage:
      'https://t4.ftcdn.net/jpg/02/17/39/75/360_F_217397507_QmlPOR9ASQ0xWLnj4KJcbaw9UFUtR6kh.jpg',
  },
  {
    Id: 5,
    CategoryName: 'Mexican ',
    CategoryImage:
      'https://t4.ftcdn.net/jpg/01/13/63/63/360_F_113636348_FPQO3sUu2ZA3HR9zOzM4lnSiWEdsoqwu.jpg',
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
                      source={{uri: item.CategoryImage}}
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
