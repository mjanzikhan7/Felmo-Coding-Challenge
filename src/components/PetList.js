
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList,Image } from 'react-native';
import moment from 'moment';
import { Images } from '../assets';

const PetList = (props) => {


    let list = props.list;


    const renderItem = (item, index) => {
        return (
            <TouchableOpacity style={styles.topView}>
                <View
                style={{flexDirection:"row"}}>
                <Image
                style={styles.imageStyle}
                source={{uri:item?.image_url}}/>
                <View
                style={{flexDirection:"column"}}>
                    <Text style={styles.nameTextStyle}>{item.name}</Text>
                    <Text style={styles.descTextStyle}>{item.description}</Text> 
                </View>
                </View>

                <Image
                style={styles.imageStyle}
                source={Images.cart}/>
               
            </TouchableOpacity>
        )
    }

    return (
            <View>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => item.id + index}
                    listKey={'SelectIndustriesScreen' + moment().format('x')}
                    removeClippedSubvisews={false}
                    renderItem={({ item, index }) => {
                        return renderItem(item, index);
                    }}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingBottom:50}}
                />
            </View>
            );
}

const styles = StyleSheet.create({
    topView: {
        marginHorizontal: 10,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imageStyle:{
        height:35,
        width:35,
    margin:5},
    nameTextStyle:{
        fontSize:16,fontWeight:"bold",
        marginHorizontal:10
    },
    descTextStyle:{
        fontSize:12,
        marginHorizontal:10,
        color:'gray',
        marginVertical:5
    }
});

export default PetList;