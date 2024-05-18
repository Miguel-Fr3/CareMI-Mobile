import { View, Text, Touchable, TextInput } from 'react-native'
import React from 'react'

const Agendamento = () => {
  return (
    <View>
      <Text>Agendamento</Text>

      <Text>Quantos dias com os sintomas? *</Text>
      <TextInput placeholder='Informe os dias em numero (ex: 3)'/>

      <Text>Os sintomas são recorrentes? *</Text>
      <TextInput placeholder='Informe se esses sintomas são comuns' />

      <Text>Quanto tempo de sono por dia? *</Text>
      <TextInput placeholder='Informe as suas horas diárias de sono' />

      <Text>Possui doenças herediárias? *</Text>
      <TextInput  placeholder='Informe quais doenças possui' />

      <Text>Descrição dos sintomas *</Text>
      <TextInput placeholder='Informe detalhadamente os seus sintomas '/>

      <Text>Data e hora do agendamento *</Text>
      <TextInput placeholder='Informe data e hora para agendar'/>

      {/* <TouchableOpacity  onPress={() => {
        }}>
            <Text>ENVIAR</Text>
        </TouchableOpacity> */}

    
    </View>
  )
}

export default Agendamento;