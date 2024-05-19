import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './components/login/Login'
import Menu from './components/menu/Menu';

export default function App() {
  const [logado, setLogado] = useState(false);

  const logar = () => { 
    setLogado(true);
  }

  return (
      <View style={{flex: 1}}>
        { !logado ? <Login logar={logar}/> : <Menu/> } 
      </View>
  );
} 
