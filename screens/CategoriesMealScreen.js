import React from 'react'
import {View, Text , StyleSheet,FlatList} from 'react-native';
import {CATEGORIES ,MEALS} from '../data/dummy-data'
import Meals from '../models/meals';
import MealItems from '../components/MealItems'

const CategoriesMealScreen = props =>{

    const renderMeatItems =(itemData)=>{
        return(
        <MealItems
       title={itemData.item.title}
       image={itemData.item.imageUrl}
       duration={itemData.item.duration}
       complexity={itemData.item.complexity}
       affordability={itemData.item.affordability}
       onSelectMeal={() => {
         props.navigation.navigate({
           routeName: 'MealDetail',
           params: {
             mealId: itemData.item.id
           }
         });
       }}
     /> 
        )
    }
    const CategoiesID = props.navigation.getParam('categoriesId');

    const displayMeal = MEALS.filter(Meals => Meals.categoryIds.indexOf(CategoiesID) >= 0)
   
    return(
        <View style={styles.screen}> 
            <FlatList  data={displayMeal} renderItem = {renderMeatItems} style={{width:'100%'}} />
        </View>
    )
}
// CategoriesMealScreen.navigationOptions = navigationData =>{
//     const CategoiesID =  navigationData.navigation.getParam('categoriesId');
//     const SelectedCategories = CATEGORIES.find(cat => cat.id === CategoiesID)
//     return{
//         headerTitle : SelectedCategories.title,
        
//             backroundColor: '#fefefe',
     
//         tintColor: '#43c2f0'
//     }

     CategoriesMealScreen.navigationOptions = navigationData => {
        const CategoiesID =  navigationData.navigation.getParam('categoriesId');
        const SelectedCategories = CATEGORIES.find(cat => cat.id === CategoiesID)
        return{
            headerTitle : SelectedCategories.title,
          };
        }
       
       
    

   

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        
         backgroundColor: 'gray'
    }
})

export default CategoriesMealScreen;