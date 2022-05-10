import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import HeaderObjetoMenu from "../../components/HeaderObjetoMenu";

import CardObjetosJogar from "../../components/CardObjetosJogar";

import { useNavigation } from '@react-navigation/native';
import CardObjetos4 from "../../components/CardObjetos4";
import Botao from "../../components/Botao";
import FormRowObjetosProx from "../../components/FormRowObjetosProx"
import FormRowObjetosProx2 from "../../components/FormRowObjetosProx2";




export default function Jogarr3() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <HeaderObjetoMenu label={'Coleção-Objetos'} />
            
            <Text style={styles.text}>Cartão 1/8</Text>

            <View style={styles.containerForm}>
                
            

            <FormRowObjetosProx label={'Janela'}/>
            <FormRowObjetosProx2 label={'Windows'}/>
               
            </View>

                <View>
                    
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                    <Text style={styles.registertext}>finalizar</Text>
                </TouchableOpacity>
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
       marginRight: 40,
    },


    registertext: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#61A170',
        borderRadius: 3,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: "center",
        textTransform:"uppercase",
        height: 50,
        paddingTop: 15,
        width: 315,
    },

   text:{
       fontSize:20,
       color: '#fff',
       marginTop:40,
   }

   
})