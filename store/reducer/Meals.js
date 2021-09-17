import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVOURITE} from '../actioin/Meals'

const initialStage={
    meals : MEALS,
    filterMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialStage, action)=>{

    switch(action.type){
        case TOGGLE_FAVOURITE :
            const existingIndex =state.favoriteMeals.findIndex(meal=> mealId)
            if(existingIndex >= 0){
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.slice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavMeals}
            }else {
                return {...state}
            }
            default :
        return {...state, favoriteMeals: state.favoriteMeals.concat(state.meals.find(meal=> meal.id === action.mealId))}
    }
    

  
}
export default mealsReducer