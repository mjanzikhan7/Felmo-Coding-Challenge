import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text, StatusBar} from 'react-native';
import {Images} from "../../assets"
import { COLORS } from '../../utils/Colors';


const  SplashScreen = (props) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('MyPetsScreen')
        },2000)
    })
        return (
            <View style={style.mainContainer}>
                <Text>Felmo Test App</Text>
            </View>
        );
    
}
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:COLORS.splashBackground,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.appGreen
    },

});

export default SplashScreen;
