import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../style/color';
import {CustomHeader} from '../component/header/CustomHeader';
import {navigate, Routes} from '../screennavigation/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Images} from '../assets/pngimg/images';

const initialMenuitemArray = [
  {
    ItemId: 1,
    CategoryId: 1,
    ItemName: 'Bajrano - Rotlo',
    ItemPrice: '50.00',
    ItemQuentity: '100gm',
    ItemImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3aKAlPWh0DjRnAupUeN6_jfRDcXBT-f26jP2d_WrsQ&s',
    count: 1,
  },
  {
    ItemId: 5,
    CategoryId: 1,
    ItemName: 'Khela Khela Khaman',
    ItemPrice: '100.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://www.shutterstock.com/image-photo/gujarati-khaman-dhokla-made-using-600nw-1785410921.jpg',
    count: 1,
  },
  {
    ItemId: 4,
    CategoryId: 2,
    ItemName: 'Cheez butter masala',
    ItemPrice: '150.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg',
    count: 1,
  },
  {
    ItemId: 6,
    CategoryId: 2,
    ItemName: 'Shahi Paneer',
    ItemPrice: '180.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://simplyvegetarian777.com/wp-content/uploads/2016/08/image-26-875x1024.png',
    count: 1,
  },
  {
    ItemId: 11,
    CategoryId: 2,
    ItemName: 'Butter Nan',
    ItemPrice: '40.00',
    ItemQuentity: '1 N',
    ItemImage:
      'https://t3.ftcdn.net/jpg/01/71/17/02/360_F_171170289_WnnpOeTro0XbmoJzLmUZVLDgigoxWd2t.jpg',
    count: 1,
  },
  {
    ItemId: 7,
    CategoryId: 3,
    ItemName: 'Chaines Bhel',
    ItemPrice: '120.00',
    ItemQuentity: '225gm',
    ItemImage:
      'https://images.slurrp.com/prod/recipe_images/transcribe/street%20food/Chinese-Bhel.webp',
    count: 1,
  },
  {
    ItemId: 8,
    CategoryId: 3,
    ItemName: 'Dry Manchurian',
    ItemPrice: '150.00',
    ItemQuentity: '15 N',
    ItemImage:
      'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/paneer_manchurian_dry_zdish.png',
    count: 1,
  },
  {
    ItemId: 14,
    CategoryId: 4,
    ItemName: 'Maisur Masala',
    ItemPrice: '150.00',
    ItemQuentity: '1 N',
    ItemImage:
      'https://www.spicingyourlife.com/wp-content/uploads/2014/04/Karnataka-Mysore-Masala-Dosa.jpg',
    count: 1,
  },
  {
    ItemId: 13,
    CategoryId: 4,
    ItemName: 'Uttapam',
    ItemPrice: '120.00',
    ItemQuentity: '4 N',
    ItemImage:
      'https://images.hindi.news18.com/ibnkhabar/uploads/2021/10/Uttapam-16347303044x3.jpg',
    count: 1,
  },
  {
    ItemId: 15,
    CategoryId: 5,
    ItemName: 'Cauliflower Tacos',
    ItemPrice: '180.00',
    ItemQuentity: '4 N',
    ItemImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrMzKVbLeCl3UK7MsUs8AJdFIgm7trzbGcdalWBlTBTFtDdXObypGoWZCQG6BZfqle7o&usqp=CAU',
    count: 1,
  },
  {
    ItemId: 17,
    CategoryId: 5,
    ItemName: 'Vegetarian Soup',
    ItemPrice: '170.00',
    ItemQuentity: '150ml',
    ItemImage:
      'https://www.simplyrecipes.com/thmb/Yows2z4NyMHCj8ZSliqSupJ2RnE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vegetarian-Tortilla-Soup-LEAD-8-598c61d8e3aa425e8907cd337ff87ce9.jpg',
    count: 1,
  },
];

export const CartScreen: React.FC = () => {
  const [modelVisible, setModalVisible] = useState(false);
  const [cartItems, setCartItems] = useState(initialMenuitemArray);
  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const itemsString = await AsyncStorage.getItem('Items');
      if (itemsString !== null) {
        const cart = JSON.parse(itemsString);
        setCartItems(cart.map(item => ({...item, count: 1})));
      }
    } catch (error) {
      console.error(error);
    }
  };
  const maxValue = 100;
  const minValue = 1;

  const increaseCount = index => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].count < maxValue) {
      newCartItems[index].count += 1;
      setCartItems(newCartItems);
    }
  };

  const decreaseCount = index => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].count > minValue) {
      newCartItems[index].count -= 1;
      setCartItems(newCartItems);
    }
  };

  const itemtotalprice = item => {
    return item.ItemPrice * item.count;
  };

  const totalitemprice = () => {
    return cartItems
      .reduce((total, item) => total + itemtotalprice(item), 0)
      .toFixed(2);
  };

  const removeItemFromCart = async ItemId => {
    try {
      const updatedCart = cartItems.filter(item => item.ItemId !== ItemId);
      await AsyncStorage.setItem('Items', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <CustomHeader label={'Food Cart'} />
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
            <View>
              <Pressable onPress={() => navigate({screenName: Routes.Cart})}>
                <View style={styles.maincomponent}>
                  <Pressable
                    style={{
                      padding: 10,
                      top: -16,
                      position: 'absolute',
                      marginLeft: -16,
                    }}
                    onPress={() => removeItemFromCart(item.ItemId)}>
                    <Image
                      source={Images.removbtn}
                      style={{width: 20, height: 20}}
                    />
                  </Pressable>
                  <View
                    style={{justifyContent: 'center', paddingHorizontal: 8}}>
                    <Text style={styles.itemname}>{item.ItemName}</Text>
                    {/*<Text style={styles.itemquentity}>{item.ItemQuentity}</Text>*/}
                    <Text
                      style={{color: color.black, marginTop: 8, fontSize: 12}}>
                      Discover the joy of a truly{'\n'}nourishing meal.
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                      }}>
                      <TouchableOpacity
                        style={styles.quantitybutton}
                        onPress={() => decreaseCount(index)}>
                        <Text style={{color: color.black, fontSize: 16}}>
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text style={styles.quantitynumber}>{item.count}</Text>
                      <TouchableOpacity
                        style={styles.quantitybutton}
                        onPress={() => increaseCount(index)}>
                        <Text style={{color: color.black, fontSize: 16}}>
                          +
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginHorizontal: 10,
                    }}>
                    <Image
                      source={{uri: item.ItemImage}}
                      style={{
                        top: -26,
                        height: 100,
                        width: 100,
                        borderRadius: 80,
                        resizeMode: 'cover',
                        borderWidth: 2,
                      }}
                    />
                    <Text
                      style={{
                        color: color.black,
                        top: -16,
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      $.{itemtotalprice(item)}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        }}
        keyExtractor={item => item.ItemId.toString()}
      />
      <View style={styles.contentfooter}>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.pay}>Pay Bill</Text>
        </Pressable>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#b7bbbb',
            borderRadius: 15,
            paddingVertical: 5,
            paddingHorizontal: 26,
            elevation: 4,
            borderWidth: 1,
            // borderColor: color.green,
          }}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.rat}>$.{totalitemprice()}</Text>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType={'slide'}
        visible={modelVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: color.white,
              borderRadius: 20,
              elevation: 22,
              borderWidth: 1,
              borderColor: color.green,
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                top: -4,
              }}>
              <Image source={Images.removbtn} style={{height: 24, width: 24}} />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: 34,
                paddingVertical: 16,
              }}>
              <Image
                source={Images.appqrcode}
                style={{
                  width: 200,
                  height: 200,
                  marginVertical: 0,
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={{
                  color: color.black,
                  fontWeight: '600',
                  fontSize: 22,
                  marginTop: 10,
                }}>
                Paymeny Bill
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  maincomponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.green,
    borderRadius: 16,
    elevation: 6,
    shadowColor: color.black,
  },
  itemname: {
    color: color.black,
    fontSize: 16,
    fontWeight: '600',
  },
  itemquentity: {
    color: color.black,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
  },
  quantitybutton: {
    color: color.black,
    fontWeight: 'bold',
    backgroundColor: color.orange2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  quantitynumber: {
    color: color.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  totalContainer: {
    padding: 14,
    borderTopWidth: 1,
    borderTopColor: color.green,
    alignItems: 'center',
    backgroundColor: color.green,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  totalText: {
    color: color.black,
    fontSize: 14,
    fontWeight: '600',
  },
  contentfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: color.green,
    borderWidth: 1,
    alignItems: 'center',
    // marginTop: 15,
    backgroundColor: color.gray1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    // position: 'absolute',
    bottom: 0,
  },
  total: {
    color: color.black,
    fontSize: 16,
    marginTop: 5,
  },
  rat: {
    color: color.black,
    fontSize: 16,
    fontWeight: '600',
  },
  pay: {
    color: color.black,
    backgroundColor: color.green,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontSize: 16,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});
