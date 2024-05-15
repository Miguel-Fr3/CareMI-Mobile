import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Logoff from './Logoff'
import Home from './Home';
import Exames from './Exames';
import Consulta from './Consulta';
import Agendamento from './Agendamento';


const Drawer = createDrawerNavigator();

const Menu = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Exames" component={Exames}  />
        <Drawer.Screen name="Carteirinha" />
        <Drawer.Screen name="Agendamento" component={Agendamento}/>
        <Drawer.Screen name="Consulta" component={Consulta} />
        <Drawer.Screen name="Assistente"/>
        <Drawer.Screen name="Configurações"/>
        <Drawer.Screen name="Sobre"/>
        
        <Drawer.Screen name="Logoff" component={Logoff}/>

      </Drawer.Navigator>
  </NavigationContainer>
  )
}

export default Menu;