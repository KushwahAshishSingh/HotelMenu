import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { back } from "react-native/Libraries/Animated/src/Easing";
import { color } from "react-native-reanimated";

const Stack = createNativeStackNavigator();
function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Categories",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
      <Stack.Screen
        name="CategoriesMeal"
        component={CategoriesMealScreen}
        backgroundColor="blue"
        options={{
          title: "Categories",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          title: "Categories",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
    </Stack.Navigator>
  );
}

// const MealsNavigator = createStackNavigator({
//     Categories: CategoriesScreen,
//     CategoriesMeal: {
//         screen: CategoriesMealScreen,
//     },
//     MealDetail: MealDetailScreen,
// }, {
//     //  initialRouteName: 'Any screen you want to load first'
//     // mode:'modal',   shows a little animation
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor
//         },
//         headerTintColor:
//             Platform.OS === 'android' ? 'white' : Colors.primaryColor,
//         headerTitle: 'A Screen'
//     }
// }
// );

const Tabs = createBottomTabNavigator();

function MealFavTabNavigatoe() {
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Main"
          component={MealsNavigator}
          options={{
            headerShown: false,

            //     title: "Hotel Menu",
            //     headerStyle: {
            //       backgroundColor: "#f4511e",

            //     },
          }}
        />
        <Tabs.Screen name="Favourites" component={FavouritesScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
// const AppContainer = MealFavTabNavigatoe
export default MealFavTabNavigatoe;

//const AppContainer = createAppContainer(MealFavTabNavigatoe)
