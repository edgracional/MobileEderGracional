import React from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import App from "./src/App";


export default function App () {

  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}


