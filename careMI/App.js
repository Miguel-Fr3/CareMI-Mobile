import { View, Text } from 'react-native';
import Login from './components/login/Login'
import Menu from './components/menu/Menu';
import { useState } from 'react'


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

