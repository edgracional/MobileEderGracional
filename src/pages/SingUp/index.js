import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import FormRow from "../../components/FormRow";

import { useNavigation } from '@react-navigation/native';



export default function SingUp() {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('')
    const [passoword, setPassoword] = useState('')
    const [passowordrepeat, setPassowordrepeat] = useState('')

    const onChangeEmail = (txtEmail) =>{
        setEmail(txtEmail)
    }
    const onChangePassorword= (txtPassorword) =>{
        setEmail(txtPassorword)
    }

    function handleSignIn(){
        if(email === '' || passoword === '' || passowordrepeat === ''){
            alert("PREENCHA OS CAMPOS")
            return;
        } 

        const data = {
            
            email,
            passoword,
            passowordrepeat,
        }

        console.log(data); 

    }


    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <Image style={styles.Logo}
                source={require('../../assets/logomini.png')}    
            />
               <Text style={styles.title}>Mind Booster</Text>
            </View>

            <Text style={styles.titlef}>Preencha os dados do seu cadastro</Text>


            
            <FormRow style={styles.containerForm}>

            <Text style={styles.titleEmail}>E-mail</Text>
            <TextInput
                placeholder=""
                style={styles.input}
                onChangeText={setEmail}
                value={email}
            />

            </FormRow>


            <FormRow >
            <Text style={styles.titleSenha}>Senha</Text>
            <TextInput
                placeholder=""
                style={styles.input}
                onChangeText={setPassoword}
                value={passoword}
                secureTextEntry
            />
           </FormRow>

            <FormRow >
            <Text style={styles.titleSenha}>Repetir senha</Text>
            <TextInput
                placeholder=""
                style={styles.input}
                onChangeText={setPassowordrepeat}
                value={passowordrepeat}
                secureTextEntry
            />
           </FormRow>

           
           

        <View style={styles.containerBotao}>

            <TouchableOpacity
            style={styles.buttonRegister} 
            onPress={ () => navigation.navigate('Singnin')} >
            <Text style={styles.registertext}>Cadastre-se</Text>
            </TouchableOpacity>

        </View>
            

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
        marginTop: 5,
        marginBottom: 40,
        marginLeft: -200,
        width:200,
        flexDirection:'row',
        alignItems:'flex-start',
        
    },

    containtext:{
        alignItems:'flex-end',
    },

   
    containerBotao: {
        display: 'flex',
        alignItems:'center',
    },

    buttonRegister:{
        marginTop: -100,
    },

    

    registertext: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#6A61A1',
        borderRadius: 3,
        fontWeight: 'bold',
        marginTop: 150,
        textAlign: "center",

        height: 50,
        paddingTop: 10,
        width: 350,
    },

    titleRepetSenha:{
        width:320,
    },

   

    input: {
        marginTop: -25,
    },

    title: {
        fontSize: 22,
        fontFamily: 'pacifico-regular',
        color: 'white',
        marginTop: 10,
    },

    titlef: {
        fontSize: 30,
        color: 'white',
        textAlign:'center',
        marginBottom: 60,
        
    },

    containerForm: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
    },

    titleEmail: {
        margin: 15,
        marginTop: 0,
        color:'#6200EE',
    },

    titleSenha: {
        margin: 15,
        marginTop: 5,
        color:'#6200EE',
    },

   
}) 