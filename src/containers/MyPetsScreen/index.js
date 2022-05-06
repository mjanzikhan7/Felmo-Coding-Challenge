import React, {useEffect,useState} from 'react';
import {View, Image, StyleSheet, Text, StatusBar} from 'react-native';
import { COLORS } from '../../utils/Colors';
import { API, APP_CONST } from '../../constants';
import { postWithFormData,getData } from '../../Api/methods';
import PetList from '../../components/PetList'
import SearchBar from '../../components/SearchBar'

const  MyPetsScreen = (props) => {

    const [myPets,setMyPets] = useState([]);
    const [actualResponse,setActualResponse] = useState([]);



    useEffect(()=>{
        userLogin()
    })

    const userLogin =()=>{
        let formData = new FormData()
        formData.append('email',APP_CONST.EMAIL)
        formData.append('password',APP_CONST.PASSWORD)
        postWithFormData(API.LOGIN,formData).then( async response =>{
            if(response?.token !== null){
                getMyPets(response?.token)    
            }
        })
    }

    const getMyPets =(token)=>{
        getData(API.MYPETS,token).then( async response =>{
            setMyPets(response)
            setActualResponse(response)
            } 
        )

    }

    let myFilter = (text)=>{
        let tmpArray =[]
        if(myPets !== undefined && myPets.length>0){
            return myPets.filter(item => item.name.includes(text))
        }  
        
    }

        return (
            <View style={style.mainContainer}>
                <SearchBar
                onChangeText={(text)=>{   
                    if(text.length>0){
                        setMyPets(myFilter(text) ) 
                    }else{
                        setMyPets(actualResponse)
                    }            
                }}/>
                <PetList
                list={myPets}/>
            </View>
        );
    
}
const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding:20,
        backgroundColor:COLORS.splashBackground,
    },

});

export default MyPetsScreen;
