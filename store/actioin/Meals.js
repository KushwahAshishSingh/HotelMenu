export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export  const toddleFavourite =(id) =>{
    return {
        type: TOGGLE_FAVOURITE,
        mealId : id
    }
}