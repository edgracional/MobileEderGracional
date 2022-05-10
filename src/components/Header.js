import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';


//Estado do componente
const Header = (props) => {
    return (
        <View style={styles.container}>
        
        <View style={styles.header}>
        <Image style={styles.img} source={require('../assets/logo.png')} />
        <Text style={styles.text}>{props.label}</Text>
        
        </View>

       
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#423F5D',
        width: '100%',
        
        marginTop: 50,
        marginBottom: 70        
        
    },

    header: {
      
       alignItems: 'center',
        
    },

    img: {
        marginTop:0,
        width: 170,
    },

    text: {
        fontFamily:'pacifico-regular',
        fontSize: 47,
        color: '#ffffff',
        
    }
 
});

export default Header;