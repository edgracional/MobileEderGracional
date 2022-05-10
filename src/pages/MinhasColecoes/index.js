import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import HeaderColecaoMenu from "../../components/HeaderColecaoMenu";

import { useNavigation } from '@react-navigation/native';

import CardColecao from "../../components/CardColecao";
import CardButton from "../../components/CardButton";







export default function MinhasColecoes() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <HeaderColecaoMenu label={'Minhas coleções'} />
            

            <View style={styles.containerForm}>
            

                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                   <CardColecao label={'Objetos'}/>   
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                   <CardColecao label={'Cores'}/>   
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                   <CardColecao label={'Animais'}/>   
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                   <CardColecao label={'Adjetivos'}/>   
                </TouchableOpacity>
               

                <CardButton/>
               
            </View>

              
            

        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display: 'flex',
        alignItems: 'center',
       
        flexDirection: 'column',
        backgroundColor:'#332E56',
    },

    containerForm:{
        marginLeft: 30,
    },

    

    iconAdd:{
        marginBottom:60,
    }

   
   

   
})