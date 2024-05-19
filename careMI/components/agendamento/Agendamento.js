import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import SucessoAgendamento from './SucessoAgendamento';
import { style } from './style';

const schema = yup.object().shape({
  dias: yup.string().required('campo obrigatório.'),
  habito: yup.string().required('campo obrigatório.'),
  tempoSono: yup.string().required('campo obrigatório.'),
  hereditario: yup.string().required('campo obrigatório.'),
  descricao: yup.string().required('campo obrigatório.'),
  dataEnvio: yup.string().required('campo obrigatório.'),
});

const Agendamento = () => {
  const [dias, setDias] = useState('');
  const [habito, setHabito] = useState('');
  const [tempoSono, setTempoSono] = useState('');
  const [hereditario, setHereditario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEnvio, setDataEnvio] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await schema.validate({
        dias,
        habito,
        tempoSono,
        hereditario,
        descricao,
        dataEnvio,
      }, { abortEarly: false });

      
      const dadosFormulario = { dias, habito, tempoSono, hereditario, descricao, dataEnvio };
      await cadastrarAtendimento(dadosFormulario);
      setModalVisible(true);
    } catch (error) {
     
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const cadastrarAtendimento = async (dadosFormulario) => {
    try {
      const response = await fetch('http://localhost:8080/atendimentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosFormulario),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados do agendamento');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      throw error;
    }
  };

  return (
    <View style={style.container}>
      <View style={style.inputLabel}>
        <Text style={style.label}>Quantos dias com os sintomas? *</Text>
        <TextInput
          style={style.input}
          placeholder='Informe os dias em número (ex: 3)'
          value={dias}
          onChangeText={setDias}
        />
        {errors.dias && <Text style={{color:'red'}} >{errors.dias}</Text>}
      </View>

      <View>
        <Text style={style.label}>Os sintomas são recorrentes? *</Text>
        <TextInput style={style.input}
          placeholder='Informe se esses sintomas são comuns'
          value={habito}
          onChangeText={setHabito}
        />
        {errors.habito && <Text style={{color:'red'}} >{errors.habito}</Text>}
      </View>

      <View>
        <Text style={style.label}>Quanto tempo de sono por dia? *</Text>
        <TextInput style={style.input}
          placeholder='Informe as suas horas diárias de sono'
          value={tempoSono}
          onChangeText={setTempoSono}
        />
        {errors.tempoSono && <Text style={{color:'red'}} >{errors.tempoSono}</Text>}
      </View>


      <View>
        <Text style={style.label}>Possui doenças hereditárias? *</Text>
        <TextInput style={style.input}
          placeholder='Informe quais doenças possui'
          value={hereditario}
          onChangeText={setHereditario}
        />
        {errors.hereditario && <Text style={{color:'red'}} >{errors.hereditario}</Text>}
      </View>

      <View>
        <Text style={style.label}>Descrição dos sintomas *</Text>
        <TextInput style={style.input}
          placeholder='Informe detalhadamente os seus sintomas'
          value={descricao}
          onChangeText={setDescricao}
        />
        {errors.descricao && <Text style={{color:'red'}} >{errors.descricao}</Text>}
      </View>

      <View>
        <Text style={style.label}>Data e hora do agendamento *</Text>
        <TextInput style={style.input}
          placeholder='Informe data e hora para agendar'
          value={dataEnvio}
          onChangeText={setDataEnvio}
        />
        {errors.dataEnvio && <Text style={{color:'red'}} >{errors.dataEnvio}</Text>}
      </View>


      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={style.text}>ENVIAR</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <SucessoAgendamento/>

          <TouchableOpacity onPress={() => {
            navigation.navigate("Home");
            setModalVisible(false)
          }}>
            <Text>Voltar para a tela inicial</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            navigation.navigate("Atendimento");
            setModalVisible(false)
          }}>
            <Text>Ir para meus atendimentos</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  );
};

export default Agendamento;
