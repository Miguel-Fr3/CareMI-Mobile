import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.tittle}>Olá, Bem Vindo!</Text>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Exames')}>
        <Image source={require('../../assets/icon/exames.svg')} />
        <Text>Acessar exames</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Agendamento')}>
        <Image source={require('../../assets/icon/agendamento.svg')} />
        <Text>Agendamento Online</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Atendimento')}>
        <Image source={require('../../assets/icon/atendimento.svg')} />
        <Text>Atendimento</Text>
      </TouchableOpacity>

      <Text>© 2024 CareMI, Inc.</Text>
    </View>
  );
};

export default Home;
