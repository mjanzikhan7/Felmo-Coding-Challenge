
import React from 'react';
import { View, StyleSheet, } from 'react-native';
import AppInput from './AppInput'

const SearchBar = (props) => {


    let onChangeText = props.onChangeText;


   
    return (
            <View style={styles.mainContainer}>
                <AppInput
                placeholder="Search"
                onChangeText={onChangeText}/>
            </View>
            );
}

const styles = StyleSheet.create({
   mainContainer:{
    margin:20,
   }
});

export default SearchBar;