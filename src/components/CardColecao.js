import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

//Estado do componente
const CardColecao = (props) => {
    const { children } = props;
    const navigation = useNavigation();
    
    return (
        
            <View style={style.container}>
            
            

            <View style={style.children}>
                
                <Image style={style.img} source={require('../assets/bola.png')}  />
                <Text style={style.text3}>{props.label}</Text>
                
            </View>

            <View style={style.containerImg}>
                
                <TouchableOpacity
                onPress={ () => navigation.navigate('NovaColecaoEditar')}
                >
                <Image style={style.img1} source={require('../assets/edit.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                <Image style={style.img2} source={require('../assets/excluir.png')} />
                </TouchableOpacity>
                
            

            </View>

          
            

        </View>
        


 
    );
};

const style = StyleSheet.create({
 container: {
     
     backgroundColor:'white',
     borderRadius: 15,
     height: 120,
     width: 370,
     marginTop: 10,
     marginBottom: 5,
     marginRight: 40,
     marginLeft: 10, 
     elevation: 1, 

     display: 'flex',
     alignItems: 'center',
     flexDirection:'row',
     justifyContent:'space-between',
    
     
     
         
 },

 children: {
     display: 'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
 },

 containerImg: {
     display: 'flex',
     
     marginRight: 20,
 
 },

 
 img: {
     marginStart: 10,
 },
 
 img1: {
     marginTop: -10,
     marginRight: -100,

 },

 img2: {
    marginTop:30,
 },
 

 

 text3: {
     color:'#27ACA7',
     fontSize: 40,
     fontWeight:'900',
    
     textAlign:'center',
     marginLeft: 40,
         
 }
 
});

export default CardColecao;