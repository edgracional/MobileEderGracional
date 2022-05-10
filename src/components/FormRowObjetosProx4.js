import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';

const FormRowObjetosProx2 = (props) => {
    const { children } = props;
    
    return (
        <View style={style.container}>
            <Text style={style.text3}>Verso</Text>
            <View style={style.text}>
            <Text style={style.text2}>{props.label}</Text>
               
            </View> 
            
        </View>

    );
};

const style = StyleSheet.create({
 container: {
     
    backgroundColor:'#ffffff',
    
   borderBottomLeftRadius: 10,
   borderBottomRightRadius: 10,
    height: 120,
    
    marginRight: 40,
    marginLeft: 80,
    paddingLeft: 10,
    paddingRight: 10,
     
     
         
 },

 text:{
    display:'flex',
    fontSize: 20,
    alignItems:'center',
    marginTop: 40,
 },

 text2:{
     fontSize: 20,
     textDecorationLine:'underline',
     
 },

 text3: {
   
    marginTop:10,
    fontSize:20,
 },
 
});

export default FormRowObjetosProx2;