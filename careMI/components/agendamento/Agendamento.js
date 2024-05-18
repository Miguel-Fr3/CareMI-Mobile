import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Agendamento = ( ) => {
  const [dias, setDias] = useState('');
  const [habito, setHabito] = useState('');
  const [tempoSono, setTempoSono] = useState('');
  const [hereditario, setHereditario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataEnvio, setDataEnvio] = useState('');

  const navigation = useNavigation();


  const cadastrarAtendimento = async (dadosFormulario) => {
    try {
      const response = await fetch('http://localhost:8080/atendimentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosFormulario)
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



  const handleSubmit = () => {
    const dadosFormulario = {
      dias,
      habito,
      tempoSono,
      hereditario,
      descricao,
      dataEnvio
    };

    cadastrarAtendimento(dadosFormulario)
    .then((responseData) => {

      navigation.navigate('Atendimento', { dados: dadosFormulario });
    })
    .catch((error) => {

      console.error('Erro ao cadastrar:', error);
    });


  };

  return (
    <View >
      <Text>Agendamento</Text>

      <Text>Quantos dias com os sintomas? *</Text>
      <TextInput
        placeholder='Informe os dias em número (ex: 3)'
        value={dias}
        onChangeText={setDias}
      />

      <Text>Os sintomas são recorrentes? *</Text>
      <TextInput
        placeholder='Informe se esses sintomas são comuns'
        value={habito}
        onChangeText={setHabito}
      />

      <Text>Quanto tempo de sono por dia? *</Text>
      <TextInput
        placeholder='Informe as suas horas diárias de sono'
        value={tempoSono}
        onChangeText={setTempoSono}
      />

      <Text>Possui doenças hereditárias? *</Text>
      <TextInput
        placeholder='Informe quais doenças possui'
        value={hereditario}
        onChangeText={setHereditario}
      />

      <Text>Descrição dos sintomas *</Text>
      <TextInput
        placeholder='Informe detalhadamente os seus sintomas'
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text>Data e hora do agendamento *</Text>
      <TextInput
        placeholder='Informe data e hora para agendar'
        value={dataEnvio}
        onChangeText={setDataEnvio}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Agendamento;
