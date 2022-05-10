import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';
import FormRowObjetosProx2 from './FormRowObjetosProx2';

const FormRowObjetosProx = (props) => {
    const { children } = props;
    
    return (
        <View style={style.container}>
            <Text style={style.text3}>Frente</Text>
            <View style={style.text}>
            <Text style={style.text2}>{props.label}</Text>
            <Text style={style.text4}>..............................................</Text>
            </View> 
           
        </View>

    );
};

const style = StyleSheet.create({
 container: {
     
     backgroundColor:'white',
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
     height: 200,
     width: 280,
     marginTop: 30,
     marginRight: 40,
     marginLeft: 80,
     
     
         
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
    marginLeft:10,
 },

 text4:{
    fontSize:20,
    marginTop:70,
 }
 
});

export default FormRowObjetosProx;