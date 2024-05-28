import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {color} from '../../style/color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate, Routes} from '../../screennavigation/Navigation';
import {Images} from '../../assets/pngimg/images';

type MenuItem = {
  ItemId: number;
  CategoryId: number;
  ItemName: string;
  ItemPrice: string;
  ItemQuentity: string;
  ItemImage: string;
  quantity?: number; // Add an optional quantity property
};

const MenuitemArray = [
  {
    ItemId: 1,
    CategoryId: 1,
    ItemName: 'Bajrano - Rotlo',
    ItemPrice: '50.00',
    ItemQuentity: '100',
    ItemImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3aKAlPWh0DjRnAupUeN6_jfRDcXBT-f26jP2d_WrsQ&s',
  },
  {
    ItemId: 5,
    CategoryId: 1,
    ItemName: 'Khela Khela Khaman',
    ItemPrice: '100.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://c.ndtvimg.com/2023-05/2siv51u_dhokla_625x300_22_May_23.jpg',
  },
  {
    ItemId: 4,
    CategoryId: 2,
    ItemName: 'Cheez butter masala',
    ItemPrice: '150.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://5.imimg.com/data5/MI/HT/GLADMIN-29391765/paneer-butter-masala-recipe-500x500.png',
  },
  {
    ItemId: 6,
    CategoryId: 2,
    ItemName: 'Shahi Paneer',
    ItemPrice: '180.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://simplyvegetarian777.com/wp-content/uploads/2016/08/image-26-875x1024.png',
  },
  {
    ItemId: 11,
    CategoryId: 2,
    ItemName: 'Butter Nan',
    ItemPrice: '40.00',
    ItemQuentity: '1 N',
    ItemImage:
      'https://t3.ftcdn.net/jpg/01/71/17/02/360_F_171170289_WnnpOeTro0XbmoJzLmUZVLDgigoxWd2t.jpg',
  },
  {
    ItemId: 7,
    CategoryId: 3,
    ItemName: 'Chaines Bhel',
    ItemPrice: '120.00',
    ItemQuentity: '225gm',
    ItemImage:
      'https://images.slurrp.com/prod/recipe_images/transcribe/street%20food/Chinese-Bhel.webp',
  },
  {
    ItemId: 8,
    CategoryId: 3,
    ItemName: 'Dry Manchurian',
    ItemPrice: '150.00',
    ItemQuentity: '15 N',
    ItemImage:
      'https://t4.ftcdn.net/jpg/03/24/56/73/360_F_324567329_VIPsg4s4kWkvqJviANcIgeYPG602kN56.jpg',
  },
  {
    ItemId: 14,
    CategoryId: 4,
    ItemName: 'Maisur Masala',
    ItemPrice: '150.00',
    ItemQuentity: '1 N',
    ItemImage:
      'https://www.spicingyourlife.com/wp-content/uploads/2014/04/Karnataka-Mysore-Masala-Dosa.jpg',
  },
  {
    ItemId: 13,
    CategoryId: 4,
    ItemName: 'Uttapam',
    ItemPrice: '120.00',
    ItemQuentity: '4 N',
    ItemImage:
      'https://images.hindi.news18.com/ibnkhabar/uploads/2021/10/Uttapam-16347303044x3.jpg',
  },
  {
    ItemId: 15,
    CategoryId: 5,
    ItemName: 'Cauliflower Tacos',
    ItemPrice: '180.00',
    ItemQuentity: '4 N',
    ItemImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrMzKVbLeCl3UK7MsUs8AJdFIgm7trzbGcdalWBlTBTFtDdXObypGoWZCQG6BZfqle7o&usqp=CAU',
  },
  {
    ItemId: 17,
    CategoryId: 5,
    ItemName: 'Vegetarian Soup',
    ItemPrice: '170.00',
    ItemQuentity: '150ml',
    ItemImage:
      'https://e7.pngegg.com/pngimages/404/754/png-clipart-red-curry-tortilla-soup-menudo-vegetarian-cuisine-soup-kitchen-soup-food-thumbnail.png',
  },
];
export const ItemSlider: React.FC = () => {
  const addToCart = async (itemId: number) => {
    try {
      const itemsString = await AsyncStorage.getItem('Items');
      let cartItems: MenuItem[] = [];

      if (itemsString !== null) {
        cartItems = JSON.parse(itemsString);
      }

      const existingItemIndex = cartItems.findIndex(
        item => item.ItemId === itemId,
      );

      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity =
          (cartItems[existingItemIndex].quantity || 0) + 1;
      } else {
        const selectedItem = MenuitemArray.find(item => item.ItemId === itemId);
        if (selectedItem) {
          const newItem = {...selectedItem, quantity: 1};
          cartItems.push(newItem);
        }
      }

      await AsyncStorage.setItem('Items', JSON.stringify(cartItems));
      console.log(cartItems);
      navigate({screenName: Routes.Cart});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <FlatList
        data={MenuitemArray}
        renderItem={({item}) => {
          return (
            <View>
              <Pressable onPress={() => addToCart(item.ItemId)}>
                <View style={styles.maincomponent}>
                  <View
                    style={{justifyContent: 'center', paddingHorizontal: 0}}>
                    <Text style={styles.itemname}>{item.ItemName}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                      }}>
                      <Image
                        source={Images.quantity}
                        style={{width: 14, height: 14}}
                      />
                      <Text style={styles.itemquantity}>
                        {item.ItemQuentity}
                      </Text>
                    </View>
                    <Text
                      style={{color: color.black, marginTop: 10, fontSize: 12}}>
                      Discover the joy of a truly{'\n'}nourishing meal.
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      // marginHorizontal: 10,
                    }}>
                    <Image
                      source={{uri: item.ItemImage}}
                      style={styles.itemimg}
                    />
                    <Text style={styles.itemprice}>$ {item.ItemPrice}</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincomponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 10,
    marginRight: 12,
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
    fontSize: 18,
    fontWeight: '600',
  },
  itemimg: {
    top: -26,
    height: 100,
    width: 100,
    borderRadius: 80,
    resizeMode: 'cover',
    borderWidth: 2,
  },
  itemquantity: {
    color: color.black,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 6,
  },
  itemprice: {
    color: color.black,
    top: -16,
    fontSize: 14,
    fontWeight: '600',
  },
});
