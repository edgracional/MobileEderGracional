import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';


//Estado do componente
const HeaderColecaoMenu = (props) => {
    return (
        <View style={styles.container}>
        
        <View style={styles.header}>
            <TouchableOpacity>
            <Image style={styles.img1} source={require('../assets/Menu.png')} />
            </TouchableOpacity>
            <Text style={styles.text1}>{props.label}</Text>
        </View>

       
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        width:400,
        height: 60,
        backgroundColor:'#4A4568',
        
        
    },
 
    img1: {
        marginLeft:15,
        marginTop:25,
        width: 25,
        height:15,
    },

    text1: {
        fontSize: 25,
        color: '#ffffff',
        marginTop: 15,
        marginLeft:20
        
    }
 
});

export default HeaderColecaoMenu;