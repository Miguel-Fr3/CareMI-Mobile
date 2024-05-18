import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const EsqueciSenha = () => {
  return (
    <View>
      <Text>CareMI</Text>

      <Text>Esqueci minha senha?</Text>

      <Text>Informe o numero do CPF para criar uma nova senha</Text>
      <TextInput/>

      <TouchableOpacity>
        <Text>Próximo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EsqueciSenha;