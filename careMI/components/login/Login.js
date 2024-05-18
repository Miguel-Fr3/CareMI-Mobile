import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { style } from './style';
import EsqueciSenha from '../senha/EsqueciSenha';

const Login = (props) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarEsqueciSenha, setMostrarEsqueciSenha] = useState(false);

  return (
    <View style={style.container}>
      <Text style={style.title}>CareMI</Text>

      <View>
        <Text style={style.text}>CPF</Text>
        <TextInput value={cpf} onChangeText={setCpf} style={style.input} />
      </View>

      <View>
        <Text style={style.text}>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} style={style.input} secureTextEntry={true} />
      </View>

      <TouchableOpacity style={style.button} onPress={() => {
        props.logar();
      }}>
        <Text style={{ color: '#fbfbfb', fontSize: "1rem", fontWeight: '600' }}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={{ color: '#fbfbfb', fontSize: "0.9rem", fontWeight: '600', marginTop: '1rem', textDecorationLine: 'underline' }}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login;
