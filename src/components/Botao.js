import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image, Button,TouchableOpacity} from 'react-native';

//Estado do componente
const Botao = (props) => {
    const { children } = props;
    
    return (
        
        <View style={style.container}>
            
            <Text style={style.text2}>Jogar!</Text>
               
        </View>
        



    );
};

const style = StyleSheet.create({
 container: {
     
     backgroundColor:'#57966A',
     borderRadius: 7,
     height: 55,
     width: 183,
     marginTop: 20,
     marginBottom: 20,
     marginRight: 105,
     marginLeft:105,
     elevation: 1, 

     display: 'flex',
     
     justifyContent:'center',
     alignItems:'center',
           
 },

 text2: {
     color: '#ffffff',
     fontSize:30,
     fontWeight:'700',
 }
 
});

export default Botao;