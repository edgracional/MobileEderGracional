import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList
} from 'react-native';

import HeaderObjetoMenu from "../../components/HeaderObjetoMenu";

import CardObjetosJogar from "../../components/CardObjetosJogar";

import { useNavigation } from '@react-navigation/native';
import CardObjetos4 from "../../components/CardObjetos4";
import Botao from "../../components/Botao";
import FormRow from "../../components/FormRow";

import CardButton from "../../components/CardButton";
import CardButton1 from "../../components/CardButton1";





export default function ColecaoObjetos() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <HeaderObjetoMenu label={'Coleção-Objetos'} />


            <View style={styles.containerForm}>

             <FormRow style={styles.forminput} > 
                 <Text style={styles.text} >Filtro</Text>    
            <TextInput
                placeholder=""
                style={styles.input} 
            />
            </FormRow>    


                <TouchableOpacity
                onPress={ () => navigation.navigate('Jogar')}
                >
                <Botao/>
                </TouchableOpacity> 

                <CardObjetos4 label={'Ávore'} label2={'Tree'}/>
            
                <CardObjetos4 label={'Janela'} label2={'Window'} />
                
                <CardObjetos4 label={'Porta'} label2={'Door'}/>
            
                <CardObjetos4 label={'Parede'} label2={'Wall'}/>
               
                <CardObjetos4 label={'Chão'} label2={'Floor'}/>

                <CardButton1 style={styles.Add} />
               
               
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
    
    add:{
    right:30,
    marginBottom:20,
    },

   
    button:{
        
        backgroundColor:'#43405E', 
    },

    
   
    text:{
        color:'#6200EE',
        fontSize:15,
        marginLeft:10,
        
    }

   

   
})