import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Image } from 'react-native';

const Logoff = ({ fazerLogoff }) => {
  return (
    <View style={{display: "flex", justifyContent: 'flex-start', alignItems: 'flex-start',}}>
      <TouchableOpacity style={{  padding: '1rem', width: '10rem', borderRadius: '2rem', marginTop: '4rem', marginBottom: '3rem', display: "flex", justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}} onPress={fazerLogoff}>
        <Image source={require('../../assets/icon/sair.svg')} ></Image>
        <Text style={{color: '#008080', fontSize: '1.5rem', textAlign: 'center', marginLeft: '1rem'}}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logoff;
