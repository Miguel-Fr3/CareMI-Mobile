import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Atendimento = () => {
  const [atendimentos, setAtendimentos] = useState([]);

  const mostrarAtendimentos = () => {
    fetch('http://localhost:8080/atendimentos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter lista de atendimentos');
        }
        return response.json();
      })
      .then(data => {
        setAtendimentos(data);
      })
      .catch(error => {
        console.error('Erro ao obter lista de atendimentos:', error);
      });
  };
  
  useEffect(() => {
    mostrarAtendimentos();
  }, []);

  const excluirAtendimento = (id) => {
    fetch(`http://localhost:8080/atendimentos/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setAtendimentos(atendimentos.filter(item => item.id !== id));
      } else {
        console.error('Erro ao excluir atendimento:', response.statusText);
      }
    })
    .catch(error => console.error('Erro ao excluir atendimento:', error));
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>Dias: {item.dias}</Text>
      <Text>Hábito: {item.habito}</Text>
      <Text>Sono: {item.tempoSonno}</Text>
      <Text>Hereditário: {item.hereditario}</Text>
      <Text>Descrição: {item.descricao}</Text>
      <Text>Data: {item.dataEnvio}</Text>
      <TouchableOpacity onPress={() => excluirAtendimento(item.id)}>
        <Text>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text>Atendimentos</Text>
      <FlatList
        data={atendimentos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Atendimento;
