import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoryGridTile from "../components/CategoryGridTile";
import CategoriesMealScreen from "./CategoriesMealScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { HeaderButton } from "../components/HeaderButton";
const CategoriesScreen = ({ navigation, props }) => {
  const renderGridItems = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        id={itemData.item.id}
        BgColor={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoriesMeal", {
            itemId: itemData.item.id,
            params: {
              categoriesId: itemData.item.id,
              title: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItems} numColumns={2} />
  );
};

CategoriesScreen.defaultNavigationOptions = (navdata) => {
  return {
    title: "demo",
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navdata.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const drawer = createDrawerNavigator();

function drawerScreens() {
  return (
    <NavigationContainer independent="true">
      <drawer.Navigator>
        <drawer.Screen name="Home" component={CategoriesScreen} />
        <drawer.Screen name="Meal Screen" component={CategoriesMealScreen} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CategoriesScreen;
