import * as React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';

import Welcome from './pages/Welcome';
import Singnin from './pages/Singnin';
import SingUp from './pages/SingUp';
import MinhasColecoes from './pages/MinhasColecoes';
import ColecaoObjetos from './pages/ColecaoObjetos';
import Jogar from './pages/Jogar';
import Jogar1 from './pages/Jogar1';
import Jogar2 from './pages/Jogar2';

import JogarProx from './pages/Jogar2';
import Jogarr3 from './pages/Jogarr3';

import NovaColecao from './pages/NovaColecao';
import NovaColecaoEditar from './pages/NovaColecaoEditar';

import NovoCartao from './pages/NovoCartao';
import NovoCartaoEditar from './pages/NovoCartaoEdidar';




function HomeScreen() {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
       <Header label={'Mind Booster'}/>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Singnin'>
       
        
      <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="Singnin"
        component={Singnin} 
        />
      <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="Menu"
        component={Singnin} 
        />
        
      
       
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="SingUp"
        component={SingUp} 
        />
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="MinhasColecoes"
        component={MinhasColecoes} 
        />
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="ColecaoObjetos"
        component={ColecaoObjetos} 
        />
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="Jogar"
        component={Jogar} 
        />
       
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="Jogar1"
        component={Jogar1} 
        />
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="Jogar2"
        component={Jogar2} 
        />
        <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="Jogarr3"
        component={Jogarr3} 
        />

<Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="NovaColecaoEditar"
        component={NovaColecaoEditar} 
        />


      <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="NovaColecao"
        component={NovaColecao} 
        />

      <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="NovoCartao"
        component={NovoCartao} 
        />

      <Stack.Screen
        options={{
            tittle: '',
            headerTransparent: true,
            headerShown: false,
        }}
        name="NovoCartaoEditar"
        component={NovoCartaoEditar} 
        />
 
       
       
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;