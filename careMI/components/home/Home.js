import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Olá, Bem Vindo!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Exames')}>
        <Text>Acessar exames</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Agendamento')}>
        <Text>Agendamento Online</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Atendimento')}>
        <Text>Atendimento</Text>
      </TouchableOpacity>

      <Text>© 2024 CareMI, Inc.</Text>
    </View>
  );
};

export default Home;
