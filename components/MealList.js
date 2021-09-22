import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItems from "./MealItems";

const MealList = ({ route, navigation }, props) => {
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
  return (
    <View style={styles.screen}>
      <FlatList
        data={Props.listData}
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

    backgroundColor: "gray",
  },
});
export default MealList;
