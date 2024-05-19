import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Error from '../../assets/images/error.png'
import Erro from '../erro/Erro';

const Atendimento = () => {
  const [atendimentos, setAtendimentos] = useState([]);
  const [atendimentoEditar, setAtendimentoEditar] = useState(null);
  const [dias, setDias] = useState('');
  const [habito, setHabito] = useState('');
  const [tempoSono, setTempoSono] = useState('');
  const [hereditario, setHereditario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEnvio, setDataEnvio] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [erro, setErro] = useState(false);


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
        setErro(false);
      })
      .catch(error => {
        console.error('Erro ao obter lista de atendimentos:', error);
        setErro(true);
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

  const mostrarAtendimentoPorId = (id) => {
    fetch(`http://localhost:8080/atendimentos/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter detalhes do atendimento');
        }
        return response.json();
      })
      .then(data => {
        setAtendimentoEditar(data.id);
        setDias(data.dias);
        setHabito(data.habito);
        setTempoSono(data.tempoSono);
        setHereditario(data.hereditario);
        setDescricao(data.descricao);
        setDataEnvio(data.dataEnvio);
        setModalVisible(true);
      })
      .catch(error => console.error('Erro ao carregar detalhes do atendimento:', error));
  };

  const atualizarAtendimento = () => {
    const dadosFormulario = {
      dias,
      habito,
      tempoSono,
      hereditario,
      descricao,
      dataEnvio
    };

    fetch(`http://localhost:8080/atendimentos/${atendimentoEditar}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosFormulario)
    })
      .then(response => {
        if (response.ok) {
          console.log('Atendimento atualizado com sucesso!');
          setModalVisible(false);
          mostrarAtendimentos();
        } else {
          console.error('Erro ao atualizar atendimento:', response.statusText);
        }
      })
      .catch(error => console.error('Erro ao atualizar atendimento:', error));
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>Dias: {item.dias}</Text>
      <Text>Hábito: {item.habito}</Text>
      <Text>Sono: {item.tempoSono}</Text>
      <Text>Hereditário: {item.hereditario}</Text>
      <Text>Descrição: {item.descricao}</Text>
      <Text>Data: {item.dataEnvio}</Text>
      <TouchableOpacity onPress={() => excluirAtendimento(item.id)}>
        <Text>Excluir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => mostrarAtendimentoPorId(item.id)}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      {erro ? (
        <Erro/>
      ) : (
        <FlatList
          data={atendimentos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}

      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View>
          <View>
            <Text>Editar Atendimento</Text>
            <Text>Dias</Text>
            <TextInput
              placeholder="Dias"
              value={dias}
              onChangeText={setDias}
            />
             <Text>Hábito</Text>
            <TextInput
              placeholder="Hábito"
              value={habito}
              onChangeText={setHabito}
            />
             <Text>Sono</Text>
            <TextInput
              placeholder="Sono"
              value={tempoSono}
              onChangeText={setTempoSono}
            />
            <Text>Hereditário</Text>
            <TextInput
              placeholder="Hereditário"
              value={hereditario}
              onChangeText={setHereditario}
            />

            <Text>Descrição</Text>
            <TextInput
              placeholder="Descrição"
              value={descricao}
              onChangeText={setDescricao}
            />
            <Text>Data</Text>
            <TextInput
              placeholder="Data"
              value={dataEnvio}
              onChangeText={setDataEnvio}
            />
             <TouchableOpacity onPress={atualizarAtendimento}>
              <Text>Atualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Atendimento;
