//navigate를 하기 위한 페이지 등록 js
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import Test1 from '../screens/TestPage/Test1'

const Auth = createStackNavigator();


export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                name = "SIgnInWellcomeScreen"
                component = {SignInWelcomeScreen}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "SignInScreen"
                component = {SignInScreen}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "SignUpScreen"
                component = {SignUpScreen}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name = "Test1"
                component = {Test1}
                options ={{
                    headerShown : false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    )
}