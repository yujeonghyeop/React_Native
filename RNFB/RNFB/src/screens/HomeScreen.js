//로그인이 완료되면 메인화면, HomeScreen으로 오게된다. 
import React from 'react'

import{View, Text, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import HomeHeader from '../components/HomeHeader'

export default function HomeScreen({navigation}){
    return(
    <View style = {styles.container}>
        <HomeHeader navigation = {navigation}/>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
})