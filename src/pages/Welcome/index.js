import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>

            <Image style={styles.Logo}
                source={require('../../assets/logo.png')}    
            />

            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Mind Booster</Text>

                <TouchableOpacity
                style={styles.button}
                onPress={ () => navigation.navigate('Singnin')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display: 'flex',
        alignItems: 'center',
        
        flexDirection: 'column',
        backgroundColor:'#43405E',
    },

    containerForm: {
        
    },

   button:{
        marginTop:80,
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        fontWeight: 'bold',
        textAlign: "center",
        width: 300,
    },

    Logo:{
        marginTop:100,
        width: 300,
        height: 300,
        display: 'flex',
        justifyContent:'flex-start',   
    },

    title: {
        fontSize: 50,
        fontFamily: 'pacifico-regular',
        color: 'white'
    }
})