import React from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation, props }) => {
  const { itemId, mealTitle } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === itemId);
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.bgImage}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            <Text>{selectedMeal.title}</Text>
          </Text>
          <Text style={styles.title} numberOfLines={1}>
            <Text>{selectedMeal.complexity}</Text>
            <Text> {selectedMeal.duration} min</Text>
          </Text>
        </View>
      </ImageBackground>
      <Text></Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      //    options={({ route }) => ({ title: route.params.name })}
      options={{
        headerTitle: (props) => <LogoTitle {...props} />,

        headerRight: () => (
          <Button
            onPress={() => alert("This is a button!")}
            title="Info"
            color="#fff"
          />
        ),
      }}
    />
  </Stack.Navigator>;

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 25,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  bgImage: {
    width: "100%",
    height: "80%",
    justifyContent: "flex-end",
    marginTop: "-16%",
  },
});
export default MealDetailScreen;
