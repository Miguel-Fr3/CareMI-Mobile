import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Logoff = ({ fazerLogoff }) => {
  return (
    <View>
      <TouchableOpacity onPress={fazerLogoff}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logoff;
