import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

const Exames = () => {
  const [exames, setExames] = useState([]);

  const mostrarExames = () => {
    fetch('http://localhost:8080/exames')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter lista de exames');
        }
        return response.json();
      })
      .then(data => {
        setExames(data);
      })
      .catch(error => {
        console.error('Erro ao obter lista de exames:', error);
      });
  };

  useEffect(() => {
    mostrarExames();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>Data: {item.data}</Text>
      <Text>Hora: {item.hora}</Text>
      <Text>Descrição: {item.descricao}</Text>
    </View>
  );

  return (
    <View>
      <Text>Exames</Text>
      <FlatList
        data={exames}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Exames;
