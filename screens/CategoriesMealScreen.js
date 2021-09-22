import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealItems from "../components/MealItems";
import MealList from "../components/MealList";
const CategoriesMealScreen = ({ route, navigation }, props) => {
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
  const availableMeals = useSelector((state) => state.meals.filterMeals);
  const { itemId } = route.params;

  const displayMeal = availableMeals.filter(
    (Meals) => Meals.categoryIds.indexOf(itemId) >= 0
  );

  return (
    //<MealList listData={displayMeal} navigation={route.navigation} />

    <View style={styles.screen}>
      <FlatList
        data={displayMeal}
        renderItem={renderMeatItems}
        style={{ width: "100%" }}
      />
    </View>
  );
};
// CategoriesMealScreen.navigationOptions = navigationData =>{
//     const CategoiesID =  navigationData.navigation.getParam('categoriesId');
//     const SelectedCategories = CATEGORIES.find(cat => cat.id === CategoiesID)
//     return{
//         headerTitle : SelectedCategories.title,

//             backroundColor: '#fefefe',

//         tintColor: '#43c2f0'
//     }

CategoriesMealScreen.navigationOptions = (navigationData) => {
  const CategoiesID = navigationData.navigation.getParam("categoriesId");
  const SelectedCategories = CATEGORIES.find((cat) => cat.id === CategoiesID);
  return {
    headerTitle: SelectedCategories.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#D2E1E5",
  },
});

export default CategoriesMealScreen;
