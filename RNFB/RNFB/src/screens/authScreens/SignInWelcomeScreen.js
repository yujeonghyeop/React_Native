//들어왔을 때 보이는 메인 페이지

import React,{useState,useRef,useEffect, useContext} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {colors, parameters, title,testpageStyle} from '../../global/styles'
import { buttonTitleBL } from '../../global/fontStyles';
import {Button} from 'react-native-elements'
import { SignInContext } from '../../contexts/authContext';
import auth from '@react-native-firebase/auth'
import logo from '../../images/logo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function SignInWelcomeScreen({navigation}){  //props는 navigation을 위함 
    const {dispatchSignedIn} = useContext(SignInContext)
useEffect(()=>{ //파이어베이스 이용하여 로그인하는 부분
    auth().onAuthStateChanged((user)=>{
        if(user){
            dispatchSignedIn({type :"UPDATE_SIGN_IN", payload :{userToken:"signed-in"}})
        }else{
            dispatchSignedIn({type :"UPDATE_SIGN_IN", payload :{userToken:null}})

        }
    })
},[])



    return(
        // flex를 활용하여 화면 구성을 할 수 있다. 
        <View style = {{flex:1}}>
            <View style = {{flex:3, justifyContent:'flex-start',alignItems:'center', paddingTop:200}}>
                <Image source={logo} style={testpageStyle.logo} />
            </View>
            

        <View style = {{flex:4}}>
            <View style = {{marginHorizontal:20, marginVertical : 20,marginTop:-80}}> 
                {/* button에 여백 두기 */}
                    <TouchableOpacity 
                            style =  {parameters.styledButton}
                                onPress = {() => {
                                    navigation.navigate("SignInScreen")
                                }}
                                //이 버튼을 누를 때 SignInScreen으로 가라는 navigation 등록
                    >
                        <Text style={buttonTitleBL}>로그인 하기</Text>
                    </TouchableOpacity>
            </View>
            <View style = {{marginHorizontal:20, marginTop : 10}}>
                    <TouchableOpacity style={parameters.styledButton} onPress = {() => {
                            navigation.navigate("Test1")
                        }}>
                        <Text style={buttonTitleBL}>검사 하러 가기</Text>
                    </TouchableOpacity>

                </View>

        </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    text1: {
        color:colors.grey3,
        fontSize:16,
        fontWeight : "bold"
    },
    text2:{
        color:'#6667ab',
        fontSize:50,
        fontWeight : "bold"
    },
    createButton: {
        backgroundColor:'#6667ab',
        alignContent:"center",
        justifyContent :"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:'#6667ab',
        height:50,
        paddingHorizontal:20,
        borderColor : '#6667ab'
    },
    createButtonTitle:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})