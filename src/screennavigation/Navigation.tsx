import React from 'react';
import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splashscreen} from '../screen/Splashscreen';
import {Loginscreen} from '../screen/Loginscreen';
import {HomeScreen} from '../screen/HomeScreen';
import {CartScreen} from '../screen/CartScreen';
import {SinginScreen} from '../screen/SinginScreen';
import {ItemCategoryScreen} from '../screen/ItemCategoryScreen';

export type StackParamsList = {
  Splashscreen: undefined;
  Loginscreen: undefined;
  HomeScreen: undefined;
  CartScreen: undefined;
  SinginScreen: undefined;
  ItemCategoryScreen: {
    categoryId: number;
  };
};

const navigationRef = createNavigationContainerRef<StackParamsList>();

const RootStack = createStackNavigator();

export enum Routes {
  Splash = 'Splashscreen',
  Login = 'Loginscreen',
  Home = 'HomeScreen',
  Cart = 'CartScreen',
  Singin = 'SinginScreen',
  ItemCategory = 'ItemCategoryScreen',
}

interface NavigationProps {
  screenName: Routes;
  params?: any;
}

export function navigate({screenName, params}: NavigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenName, params);
  }
}

export function replace({screenName, params}: NavigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch({
      ...StackActions.replace(screenName, params),
    });
  }
}

export function reset({screenName, params}: NavigationProps) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: screenName, params}],
      }),
    );
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    if (navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }
}
export const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={Routes.Splash}>
        <RootStack.Screen name="Splashscreen" component={Splashscreen} />
        <RootStack.Screen name="Loginscreen" component={Loginscreen} />
        <RootStack.Screen name="SinginScreen" component={SinginScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="CartScreen" component={CartScreen} />
        <RootStack.Screen
          name="ItemCategoryScreen"
          component={ItemCategoryScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
