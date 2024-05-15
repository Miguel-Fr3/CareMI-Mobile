import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login/Login'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <Login/>  
      </NavigationContainer>
  );
}

