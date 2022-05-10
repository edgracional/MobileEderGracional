import React, { Component } from 'react';
import {Text, View, TextInput, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

//Estado do componente
const CardObjetos4 = (props) => {
    const { children } = props;
    const navigation = useNavigation();
    
    return (
        
        <View style={style.container}>
           
           <View style={style.container1}>
           
           <View style={style.children1}>
                <Text style={style.text2}>frente</Text>
                <Text style={style.text3}>{props.label}</Text>
           </View>

            <View style={style.children2}>
                <Text style={style.text21}>verso</Text>
                <Text style={style.text4}>{props.label2}</Text>  
            </View>
            </View> 

            <View style={style.containerImg}>
                <TouchableOpacity
                onPress={ () => navigation.navigate('NovoCartaoEditar')}
                >
                <Image style={style.img1} source={require('../assets/edit.png')}/>
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
     height: 70,
     width: 370,
     marginTop: 5,
     marginBottom: 5,
     marginRight: 40,
     marginLeft: 10,
     
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-between',
     
    
         
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

 children2: {
     display: 'flex',
     alignItems:'flex-start',
         
 },

 containerImg: {
     display: 'flex',
     alignItems:'center',
     flexDirection:'row',
     justifyContent:'space-between',
     marginRight:15,
     width: 80,   
 },

 img1: {
   
 },


 text3: {
     color:'#27ACA7',
     fontSize: 28,
     fontWeight:'900',
     
     
 },
 
 text4: {
     color:'#27ACA7',
     fontSize: 28,
     fontWeight:'900',
    
     
     
           
 }
 
});

export default CardObjetos4;