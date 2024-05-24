import React, {useMemo} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from '../style/color';
import {Images} from '../assets/pngimg/images';
import {
  navigate,
  Routes,
  StackParamsList,
} from '../screennavigation/Navigation';
import {CustomHeader} from '../component/header/CustomHeader';
import {RouteProp, useRoute} from '@react-navigation/native';

type MenuItem = {
  ItemId: number;
  CategoryId: number;
  ItemName: string;
  ItemPrice: string;
  ItemQuentity: string;
  ItemImage: string;
  quantity?: number;
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
      'https://www.shutterstock.com/image-photo/gujarati-khaman-dhokla-made-using-600nw-1785410921.jpg',
  },
  {
    ItemId: 4,
    CategoryId: 2,
    ItemName: 'Cheez butter masala',
    ItemPrice: '150.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://j6e2i8c9.rocketcdn.me/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3.jpg',
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
      'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/paneer_manchurian_dry_zdish.png',
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
      'https://www.simplyrecipes.com/thmb/Yows2z4NyMHCj8ZSliqSupJ2RnE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Vegetarian-Tortilla-Soup-LEAD-8-598c61d8e3aa425e8907cd337ff87ce9.jpg',
  },
];
export const ItemCategoryScreen: React.FC = () => {
  const route = useRoute<RouteProp<StackParamsList, 'ItemCategoryScreen'>>();
  const {categoryId} = route.params;
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

  const getCategoryById = useMemo(() => {
    let tampData = [];
    tampData = MenuitemArray.filter(value => value.CategoryId === categoryId);
    return tampData;
  }, [categoryId]);
  console.log('getCategoryById ==>>', categoryId);
  return (
    <View style={{backgroundColor: color.white, flex: 1}}>
      <CustomHeader label={'Item Categorys'} />
      <FlatList
        data={getCategoryById}
        renderItem={({item}) => {
          return (
            <View>
              <Pressable onPress={() => addToCart(item.ItemId)}>
                <View style={styles.maincomponent}>
                  <View style={{justifyContent: 'center'}}>
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
