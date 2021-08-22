import React from 'react';
import {HeaderButtons} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/Colors'
import {Platform} from 'react-native'

const CustomHeaderButton = props =>{
    return(
        <HeaderButtons {...props} 
        IconComponent ={Ionicons}
        IconSize ={23}
        color= {Platform.OS === 'android' ? Colors.accentColor : Colors.primaryColor }  
        />
    )
}

export default CustomHeaderButton