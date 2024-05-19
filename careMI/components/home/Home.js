import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';
import { Image } from 'react-native';
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.tittle}>Olá, Bem Vindo!</Text>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Exames')}>
        <View style={style.icon}>
          <Image style={{backgroundColor: '#008080', width: '44.5px', height: '50px'}} source={require('../../assets/icon/exames.svg')} />
        </View>
        <Text style={style.text}>Acessar exames</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Agendamento')}>
        <View style={style.icon}>
          <Image style={{backgroundColor: '#008080', width: '44.5px', height: '50px'}} source={require('../../assets/icon/agendamento.svg')} />
        </View>
        <Text style={style.text}>Agendamento Online</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Atendimento')}>
        <View style={style.icon}>
          <Image style={{backgroundColor: '#008080', width: '44.5px', height: '50px'}} source={require('../../assets/icon/atendimento.svg')} />
        </View> 
        <Text style={style.text}>Atendimento</Text>
      </TouchableOpacity>

      <Text style={{marginTop: '2rem', marginBottom: '6rem'}}>© 2024 CareMI, Inc.</Text>
    </View>
  );
};

export default Home;
