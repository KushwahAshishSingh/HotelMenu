import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoriesMealScreen from '../screens/CategoriesMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import CatScreen from '../screens/CategoriesScreen'
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeal: {
        screen: CategoriesMealScreen,
    },
    MealDetail: MealDetailScreen,
   
}, {

  //  initialRouteName: 'Any screen you want to load first'
 // mode:'modal',   shows a little animation

defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.accentColor : Colors.primaryColor
      },
      headerTintColor:
      Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}
}
);



// const Tabs = createBottomTabNavigator();
//  function MealFavTabNavigatoe () {

//            return(
//                 <Tabs.Navigator>
//                     <Tabs.Screen name="MealsNavigator" component={CatScreen}/>
//                     <Tabs.Screen name="Favourites" component={FavouritesScreen}/>
//                 </Tabs.Navigator>
//            )
// }  
const AppContainer = createAppContainer(MealsNavigator)
export default AppContainer ;