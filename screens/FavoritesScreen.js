import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./CategoriesScreen";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItems from "../components/MealItems";
import filterScreen from "./FilterScreen";

const FavoritesScreen = ({ route, navigation, props }) => {
  const renderMeatItems = (itemData) => {
    console.log(itemData.item.id);
    return (
      <MealItems
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate("MealDetail", {
            itemId: itemData.item.id,
            params: {
              itemId: itemData.item.id,
              mealTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return (
    <View style={styles.screen}>
      <FlatList
        data={favMeals}
        renderItem={renderMeatItems}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#C3EBF6",
  },
});

// const drawer = createDrawerNavigator();

// function drawerScreens() {
//   return (
//     <NavigationContainer independent="true">
//       <drawer.Navigator>
//         <drawer.Screen name="Favorites Screen" component={FavoritesScreen} />
//         <drawer.Screen name="Filter Screen" component={filterScreen} />
//       </drawer.Navigator>
//     </NavigationContainer>
//   );
// }
export default FavoritesScreen;
