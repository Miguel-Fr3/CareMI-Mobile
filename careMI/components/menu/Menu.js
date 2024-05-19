// No componente Menu
import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Logoff from '../logoff/Logoff';
import Home from '../home/Home';
import Exames from '../exame/Exames';
import Atendimento from '../atendimento/Atendimento';
import Agendamento from '../agendamento/Agendamento';

const Drawer = createDrawerNavigator();

const Menu = ({ fazerLogoff }) => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Exames" component={Exames} />
          <Drawer.Screen name="Agendamento" component={Agendamento} />
          <Drawer.Screen name="Atendimento" component={Atendimento} />
          <Drawer.Screen name="Sair">
            {() => <Logoff fazerLogoff={fazerLogoff} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Menu;
