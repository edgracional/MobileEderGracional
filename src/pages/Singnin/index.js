import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FormRow from "../../components/FormRow";

import { useNavigation } from '@react-navigation/native';





export default function Singnin() {
    const navigation = useNavigation();

    const [username, setEUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        if(email === '' || password === ''){
            alert("PREENCHA OS CAMPOS")
            return;
        } 

        const data = {
            
            email,
            password,
        }

        console.log(data); 

    }
    


    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <Image style={styles.Logo}
                source={require('../../assets/logo.png')}    
            />
            </View>

            <Text style={styles.title}>Mind Booster</Text>


            
            <FormRow style={styles.containerForm}>

            <Text style={styles.titleEmail}>E-mail</Text>
            <TextInput
                placeholder=""
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />

            </FormRow>


            <FormRow style={styles.containerForm}>
                <Text style={styles.titleSenha}>Senha</Text>
                <TextInput
                    placeholder=""
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
            />
                <View style={styles.containtext}>
                    <Text style={styles.title1}>Esqueci a senha</Text>
                </View>
                
        <View style={styles.containerBotao}>
            <TouchableOpacity
            style={styles.button}
            onPress={ () => navigation.navigate('MinhasColecoes')}
            
            
            >
                <Text style={styles.buttontext}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={ () => navigation.navigate('SingUp')}
            >
            <Text style={styles.registertext}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
            </FormRow>

            </View>

      

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        alignItems: 'center',
      
        flexDirection: 'column',
        backgroundColor:'#43405E',
    },

   
    containerHeader: {
        marginTop: 80,
    },

    containerBotao: {
        display: 'flex',
        alignItems:'center',
    },

    containtext:{
        display:'flex',
        alignItems:'flex-end',
    },

    button:{
        marginTop:30,
        width: 300,
        height: 300,
        display: 'flex',
        alignItems: 'center',
    },

    buttontext: {
       
        fontSize: 18,
        color: 'white',
        backgroundColor: '#6A61A1',
        borderRadius: 3,
        fontWeight: 'bold',
        textAlign: "center",
        
        height: 50,
        paddingTop: 10,
        width: 350,  
        
    },

    registertext: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#B58D97',
        borderRadius: 3,
        fontWeight: 'bold',
        marginTop: -160,
        textAlign: "center",

        height: 50,
        paddingTop: 10,
        width: 350,
    },

   

    input: {
        marginTop: -25,
        
    },

    title: {
        fontSize: 45,
        fontFamily: 'pacifico-regular',
        color: 'white',
    },
    title1: {
        fontSize: 18,
        color: 'white',

        alignItems:'flex-end',
    },

    containerForm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    },

    titleEmail: {
        margin: 15,
        marginTop: 5,
        color:'#6200EE',
    },

    titleSenha: {
        margin: 15,
        marginTop: 5,
        color:'#6200EE',
    },

}) 