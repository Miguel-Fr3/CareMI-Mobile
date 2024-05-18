import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Atendimento = () => {
  const route = useRoute();
  const { dados } = route.params;
  

  const dadosArray = [
    { key: 'Dias', value: dados.dias },
    { key: 'Hábito', value: dados.habito },
    { key: 'Sono', value: dados.tempoSono },
    { key: 'Hereditario', value: dados.hereditario },
    { key: 'Descrição', value: dados.descricao },
    { key: 'Data', value: dados.dataEnvio }
  ];

  return (
    <View>
      <Text>Atendimento</Text>
      <FlatList
        data={dadosArray}
        renderItem={({ item }) => (
          <View>
            <Text>{item.key}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default Atendimento;
