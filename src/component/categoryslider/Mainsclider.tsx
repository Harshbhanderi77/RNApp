import React, {useState, useEffect} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import {navigate, Routes} from '../../screennavigation/Navigation';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const ImageArray = [
  {
    Id: 1,
    CategoryName: 'Gujrati',
    CategoryImage:
      'https://curlytales.com/wp-content/uploads/2023/11/Gujarati-Thali.jpg',
  },
  {
    Id: 2,
    CategoryName: 'Panjabi',
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgkAk5PUJWgGvbiINJo6hcsmMQAGVOLlKYQ&usqp=CAU',
  },
  {
    Id: 3,
    CategoryName: 'Chinese',
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
    CategoryName: 'Mexican',
    CategoryImage:
      'https://t4.ftcdn.net/jpg/01/13/63/63/360_F_113636348_FPQO3sUu2ZA3HR9zOzM4lnSiWEdsoqwu.jpg',
  },
];

const MainSlider = ({count}: {count: number}) => {
  const sliders = [];
  for (let i = 0; i < count; i++) {
    sliders.push(
      <View key={i} style={{marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.shimmerView}>
            <ShimmerPlaceHolder
              style={{width: 60, height: 60, borderRadius: 30}}
              shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <View style={{margin: 10}}>
              <ShimmerPlaceHolder
                style={{width: 40, height: 14, borderRadius: 10}}
              />
            </View>
          </View>

          <View style={styles.shimmerView}>
            <ShimmerPlaceHolder
              style={{width: 60, height: 60, borderRadius: 60}}
              shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <View style={{margin: 10}}>
              <ShimmerPlaceHolder
                style={{width: 40, height: 14, borderRadius: 10}}
              />
            </View>
          </View>

          <View style={styles.shimmerView}>
            <ShimmerPlaceHolder
              style={{width: 60, height: 60, borderRadius: 60}}
              shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <View style={{margin: 10}}>
              <ShimmerPlaceHolder
                style={{width: 40, height: 14, borderRadius: 10}}
              />
            </View>
          </View>

          <View style={styles.shimmerView}>
            <ShimmerPlaceHolder
              style={{width: 60, height: 60, borderRadius: 60}}
              shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <View style={{margin: 10}}>
              <ShimmerPlaceHolder
                style={{width: 40, height: 14, borderRadius: 10}}
              />
            </View>
          </View>

          <View style={styles.shimmerView}>
            <ShimmerPlaceHolder
              style={{width: 60, height: 60, borderRadius: 60}}
              shimmerColors={['#ebebeb', '#c5c5c5', '#ebebeb']}
            />
            <View style={{margin: 10}}>
              <ShimmerPlaceHolder
                style={{width: 40, height: 14, borderRadius: 10}}
              />
            </View>
          </View>
        </View>
      </View>,
    );
  }
  return sliders;
};

export const Mainsclider: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{backgroundColor: color.white}}>
      <Text style={styles.Mainname}>Food Category</Text>
      {loading ? (
        <MainSlider count={1} />
      ) : (
        <FlatList
          data={ImageArray}
          extraData={ImageArray}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
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
                      style={styles.ItemImage}
                      source={{uri: item.CategoryImage}}
                    />
                  </View>
                </Pressable>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={styles.ItemName}>{item.CategoryName}</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.Id.toString()}
        />
      )}
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
  ItemImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    resizeMode: 'cover',
  },
  ItemName: {
    color: color.black,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  shimmerView: {
    margin: 8,
  },
});
