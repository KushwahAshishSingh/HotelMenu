import React from 'react'
import {View, Text , StyleSheet,Button,FlatList ,TouchableOpacity,Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import CategoriesMealScreen from './CategoriesMealScreen';



const CategoriesScreen = props =>{
const renderGridItems = (itemData)=>{
    return (
    <CategoryGridTile title ={itemData.item.title} id={itemData.item.id} BgColor = {itemData.item.color }
            onSelect = {() =>{
                props.navigation.navigate({routeName:'CategoriesMeal',
                params:{ categoriesId : itemData.item.id } ,      
            }) }  }
        />)
}

    return(
        <FlatList 
            data={CATEGORIES}
            renderItem={renderGridItems}
            numColumns={2}
        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle : 'Categorie Screen',
}

   

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        overflow:'hidden'
    },
    
})





export default CategoriesScreen;