import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';

const FormRow2 = (props) => {
    const { children } = props;
    
    return (
        <View style={style.container}>

            <View style={style.children}>
               {children}
            </View> 
            
        </View>

    );
};

const style = StyleSheet.create({
 container: {
     
     backgroundColor:'white',
    
     width: 350,
     height: 170,
     marginTop: 10,
     marginBottom: 5,
     marginRight: 40,
     marginLeft: 35,
     
     elevation: 1,    
         
 }
 
});

export default FormRow2;