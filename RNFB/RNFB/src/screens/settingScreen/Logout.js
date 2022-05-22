import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native'
import {logo, myPageStyle} from '../../global/styles';
import Logo from '../../images/logo.png'
import {Button} from 'react-native-elements';
import { buttonTitleB  } from '../../global/fontStyles';
import {setting} from '../../global/styles';

export default function Logout(){
    return(
        <View style = {setting.container}>
            <Text>Logout</Text>
        </View>
    )
}