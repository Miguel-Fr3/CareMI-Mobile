import React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Logoff from '../logoff/Logoff'
import Home from '../home/Home';
import Exames from '../exame/Exames';
import Consulta from '../consulta/Consulta';
import Agendamento from '../agendamento/Agendamento';


const Drawer = createDrawerNavigator();

const Menu = () => {

  return (
    <View style={{flex: 1}}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Exames" component={Exames}  />
        {/* <Drawer.Screen name="Carteirinha" /> */}
        <Drawer.Screen name="Agendamento" component={Agendamento}/>
        <Drawer.Screen name="Consulta" component={Consulta} />
        {/* <Drawer.Screen name="Assistente"/>
        <Drawer.Screen name="Configurações"/>
        <Drawer.Screen name="Sobre"/> */}
        
        <Drawer.Screen name="Logoff" component={Logoff}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default Menu;