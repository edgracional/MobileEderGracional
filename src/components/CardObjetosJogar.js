import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image, Button} from 'react-native';

//Estado do componente
const CardObjetosJogar = (props) => {
    const { children } = props;
    
    return (
        
        <View style={style.container}>
           
           <View style={style.container1}>
           

                <View style={style.children2}>
                    
                    <Text style={style.text}>{props.label}</Text>
                
                </View>
                
            </View>  

        </View>
        



    );
};

const style = StyleSheet.create({
 container: {
     
     backgroundColor:'white',
     borderRadius: 10,
     height: 350,
     width: 320,
     marginLeft: 35,
     
     marginTop: 40,
     marginBottom: 5,

     
     
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    
     
    
         
 },

 container1: {
     display: 'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center',
     marginLeft: 15,

     
 },

 children1: {
    width: 120,
 },

 text: {
     fontSize: 25,
     color:'#414141',
     marginLeft: -25,
     textDecorationLine:'underline'
 }


 
});

export default CardObjetosJogar;