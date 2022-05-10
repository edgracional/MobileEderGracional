import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

//Estado do componente
const CardButton = (props) => {
    const { children } = props;
    const navigation = useNavigation();
    
    return (
        
            <View style={style.container}>
            
            

          
            

            
                <TouchableOpacity
                style={style.iconAdd}
                onPress={ () => navigation.navigate('NovaColecao')}
                >
                    <Text style={style.iconbutton} >+</Text>
                </TouchableOpacity>
          
            

        </View>
        


 
    );
};

const style = StyleSheet.create({
 container: {
     
    
    
     height: 120,
     width: 370,
     marginTop: 10,
     marginBottom: 5,
     marginRight: 40,
     marginLeft: 10, 
    

     display: 'flex',
     
     alignItems: 'center',
     flexDirection:'row',
     justifyContent:'flex-end', 
         
 },

 iconAdd:{
    width:50,
    height:100,
    right:20,
    
 },

 

 iconbutton:{
    backgroundColor:'#7A71AF',
    fontSize:35,
    color:'#fff',
    textAlign:'center',
    borderRadius:50
    
},
});

export default CardButton;