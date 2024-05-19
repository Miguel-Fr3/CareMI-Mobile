import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Error from '../../assets/images/error.png'
import Erro from '../erro/Erro';
import { style } from '../agendamento/style.js';
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
    <View style={{ width: '20rem', borderWidth: 2,  borderColor: 'black', borderRadius: 0,  borderStyle: 'solid', backgroundColor:"#fbfbfb"}}>
      <Text style={{fontWeight: '600'}}>Atendimento</Text>
      <Text>Dias: {item.dias}</Text>
      <Text>Hábito: {item.habito}</Text>
      <Text>Sono: {item.tempoSono}</Text>
      <Text>Hereditário: {item.hereditario}</Text>
      <Text>Descrição: {item.descricao}</Text>
      <Text>Data: {item.dataEnvio}</Text>
      <TouchableOpacity onPress={() => excluirAtendimento(item.id)}>
        <Text style={{fontWeight: '600', marginTop: '0.5rem', fontSize: '1rem', color: 'red'}}>Excluir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => mostrarAtendimentoPorId(item.id)}>
        <Text style={{fontWeight: '600', marginTop: '0.5rem', fontSize: '1rem'}}>Editar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 , backgroundColor:"#fbfbfb"}}>
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
          <View style={style.container}>
          
            <Text style={{fontWeight: '600', marginTop: '1rem', fontSize: '2rem'}}>Editar Atendimento</Text>
            <View style={style.inputLabel}>
              <Text style={style.label}>Dias</Text>
              <TextInput style={style.input}
                placeholder="Dias"
                value={dias}
                onChangeText={setDias}
              />
            </View>
            <View style={style.inputLabel}>
              <Text  style={style.label}>Hábito</Text>
              <TextInput style={style.input}
                placeholder="Hábito"
                value={habito}
                onChangeText={setHabito}
              />
            </View>
            <View style={style.inputLabel}>
              <Text  style={style.label}>Sono</Text>
              <TextInput style={style.input}
                placeholder="Sono"
                value={tempoSono}
                onChangeText={setTempoSono}
              />
            </View>

            <View style={style.inputLabel}>
              <Text  style={style.label}>Hereditário</Text>
              <TextInput style={style.input}
                placeholder="Hereditário"
                value={hereditario}
                onChangeText={setHereditario}
              />
            </View>


            <View style={style.inputLabel}>
              <Text  style={style.label}>Descrição</Text>
              <TextInput style={style.input}
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
              />
            </View>

            <View style={style.inputLabel}>
              <Text  style={style.label}>Data</Text>
              <TextInput style={style.input}
                placeholder="Data"
                value={dataEnvio}
                onChangeText={setDataEnvio}
              />
            </View>

             <TouchableOpacity style={style.button} onPress={atualizarAtendimento}>
              <Text style={style.text}>Atualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Atendimento;
