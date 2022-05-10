import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image} from 'react-native';

const FormRow1 = (props) => {
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
     borderTopStartRadius: 10,
     borderTopRightRadius: 10,
     width: 350,
     height: 100,
     marginTop: 10,
     marginBottom: 5,
     marginRight: 40,
     marginLeft: 35,
     
     elevation: 1,    
         
 }
 
});

export default FormRow1;