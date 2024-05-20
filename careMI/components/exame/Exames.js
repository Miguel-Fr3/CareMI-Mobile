import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Erro from '../erro/Erro';
import { style } from './style';

const Exames = () => {
  const [exames, setExames] = useState([]);
  const [erro, setErro] = useState(false);

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
        setErro(false);
      })
      .catch(error => {
        console.error('Erro ao obter lista de exames:', error);
        setErro(true);
      });
  };

  useEffect(() => {
    mostrarExames();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ width: '20rem', marginBottom: '1rem', backgroundColor:"#fbfbfb"}}>
      <Text style={{fontWeight: '600'}}>Exame</Text>
      <Text>Data: {item.data}</Text>
      <Text>Hora: {item.hora}</Text>
      <Text>Descrição: {item.descricao}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 , backgroundColor:"#fbfbfb"}}>
      {erro ? (
        <Erro/>
      ) : (
        <FlatList
          data={exames}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Exames;
