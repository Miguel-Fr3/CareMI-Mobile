import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const AtualizarSenha = () => {
  return (
    <View>
      <Text>CareMI</Text>

      <Text>Nova senha.</Text>

      <Text>Informe a nova senha</Text>
      <TextInput/>

      <TouchableOpacity >
        <Text>Próximo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AtualizarSenha;