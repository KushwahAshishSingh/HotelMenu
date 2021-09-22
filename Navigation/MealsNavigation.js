import React from "react";
import { Platform, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealScreen from "../screens/CategoriesMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import { color } from "react-native-reanimated";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { Ionicons } from "@expo/vector-icons";
import FilterScreen from "../screens/FilterScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

CustomHeaderButton;
const Stack = createNativeStackNavigator();
// const defaultStackNavOptions = {
//   headerStyle: {
//     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
//   },
//   headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
//   title: "A Screen",
// };
function MealsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerStyle: {
            backgroundColor: "#D2E1E5",
          },
        }}
      />
      <Stack.Screen
        name="CategoriesMeal"
        component={CategoriesMealScreen}
        backgroundColor="blue"
        options={{
          title: "Meal Categories",
          headerStyle: {
            backgroundColor: "#D2E1E5",
          },
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          title: "Meal Details",
          headerStyle: {
            backgroundColor: "#D2E1E5",
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#fff"
            ></Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const FavNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavouritesScreen}
        options={{
          title: "Fav",
          headerStyle: {
            backgroundColor: "#D2E1E5",
          },
        }}
      />

      <Stack.Screen
        name="Meal Details"
        component={MealDetailScreen}
        options={{
          title: "MealD",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      />
    </Stack.Navigator>
  );
};
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
            tabBarActiveTintColor: Colors.accentColor,
            tabBarInactiveTintColor: "white",
            tabBarLabel: "HOME",
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-restaurant"
                  size={30}
                  color={tabInfo.tabBarActiveTintColor}
                />
              );
            },
            headerShown: false,
            //     title: "Hotel Menu",
            //   headerStyle: {
            //       backgroundColor: "#f4511e",}
          }}
        />
        <Tabs.Screen
          name="Favourites"
          component={FavNavigation}
          options={{
            tabBarActiveTintColor: Colors.accentColor,
            tabBarInactiveTintColor: "white",
            tabBarLabel: "FAVORITE",

            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="ios-star"
                  size={30}
                  //  color={tabInfo.tabBarActiveTintColor}
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
// const AppContainer = MealFavTabNavigatoe

const drawer = createDrawerNavigator();

function drawerScreens() {
  return (
    <NavigationContainer independent="true">
      <drawer.Navigator>
        <drawer.Screen
          name="FOOD APP"
          component={MealFavTabNavigatoe}
          options={{
            headerTitle: false,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
          }}
        />
        <drawer.Screen name="Filter Screen" component={FilterScreen} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}

export default MealFavTabNavigatoe;

//const AppContainer = createAppContainer(MealFavTabNavigatoe)
