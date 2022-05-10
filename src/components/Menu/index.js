import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';




const Drawer = createDrawerNavigator();

export default function Menu() {
    return(
        <Drawer.Navigator initialRouteName='Singnin'>
            <Drawer.Screen name='Singnin' component={Singnin}/>
            <Drawer.Screen name='MinhasColecoes' component={MinhasColecoes}/>
        </Drawer.Navigator>
    );

}