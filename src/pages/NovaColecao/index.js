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
import FormRow1 from "../../components/FormRow1";
import FormRow2 from "../../components/FormRow2";





export default function NovaColecao() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <HeaderObjetoMenu style={styles.textheader} label={'Coleção-Objetos'} />

            <View>
            <Text style={styles.textCadastro} >Preencha os dados referente à coleção a ser criada</Text>
            </View>
            

            <View style={styles.containerForm}>

             <FormRow> 
                 <Text style={styles.text} >Filtro</Text>    
            <TextInput
                placeholder=""
                style={styles.input} 
            />
            </FormRow>    

             <FormRow1 style={styles.input2} > 
                 <Text style={styles.text} >Descrição</Text>    
            <TextInput
                placeholder=""
                style={styles.input} 
            />
            </FormRow1>    
             <FormRow2 style={styles.form} > 
                 <Text style={styles.text} >Imagem</Text> 

                 <View style={styles.containimg} >
                 <Image  style={styles.img} source={require('../../assets/+.png')}  />   
                 </View>
            </FormRow2>    

        <View style={styles.containerBotao}>
            <TouchableOpacity
            style={styles.button}
            onPress={ () => navigation.navigate('MinhasColecoes')}
            
            
            >
                <Text style={styles.buttontext}>cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={ () => navigation.navigate('MinhasColecoes')}
            >
            <Text style={styles.registertext}>cadastre-se</Text>
            </TouchableOpacity>
        </View>






                
               
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
        marginLeft: 5,
    },

    containimg:{
        alignItems:'center',
        
    },

    containerBotao:{
        alignItems: 'center',
        marginTop:120,
    },

    input2:{
        height:200,
    },

    button:{
        borderColor: '#ffffff',
    },

    

    
    buttontext: {
       
        fontSize: 18,
        color: 'white',
        backgroundColor: '#4A456D',
        borderRadius: 3,
        fontWeight: 'bold',
        textAlign: "center",
        borderColor: 15,
        textTransform:'uppercase',
        height: 50,
        paddingTop: 10,
        width: 350,  
        
    },

    registertext: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#6A61A1',
        borderRadius: 3,
        fontWeight: 'bold',
        marginTop: -160,
        textAlign: "center",
        textTransform:'uppercase',
        height: 50,
        paddingTop: 10,
        width: 350,
    },


    text:{
        color:'#6200EE',
        fontSize:15,
        marginLeft:10,
        
    },
    textCadastro: {
        color:'#ffffff',
        fontSize: 23,
        textAlign:'center',
        marginTop:18,
        marginBottom:25,
        
      },

      textheader:{
          marginTop:30,
      }

   

   
})