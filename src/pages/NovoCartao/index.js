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
import FormRowObjetosProx3 from "../../components/FormRowObjetosProx3";
import FormRowObjetosProx4 from "../../components/FormRowObjetosProx4";



export default function NovoCartao() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <HeaderObjetoMenu label={'Coleção-Objetos'} />
            
            <View style={styles.textCadastro}>
            <Text style={styles.textCadastro} >Preencha os dados da frente e do verso do flashcard</Text>
            </View>

            <View style={styles.containerForm}>
                
                <FormRowObjetosProx3 label={'Brinquedo'}/>
                <FormRowObjetosProx4 label={'Toy'}/>
               
            </View>

                <View>
                    
                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                    <Text style={styles.registertext}>cadastrar</Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity
                style={styles.button1}
                onPress={ () => navigation.navigate('ColecaoObjetos')} >
                    <Text style={styles.registertext}>cancelar</Text>
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

    button1:{
        marginTop: 80,
    },

    textCadastro: {
        color:'#ffffff',
        fontSize: 23,
        textAlign:'center',
        marginTop:18,
        marginBottom:25,
        
      },


    registertext: {
        fontSize: 15,
        color: 'white',
        backgroundColor: '#6A61A1',
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