import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import { style } from './style';
import EsqueciSenha from '../senha/EsqueciSenha';

const Login = ({ logar }) => {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [modalEsqueciSenhaVisible, setModalEsqueciSenhaVisible] = useState(false);
  const [erroLogin, setErroLogin] = useState("");


  const abrirModalEsqueciSenha = () => {
    setModalEsqueciSenhaVisible(true);
  };

  const fecharModalEsqueciSenha = () => {
    setModalEsqueciSenhaVisible(false);
  };

  const handleLogin = () => {
    if (cpf && senha) {
      fetch("http://localhost:8080/logins")
        .then(response => response.json())
        .then(data => {
          const loginEncontrado = data.find(login => login.cpf === cpf && login.senha === senha);
          if (loginEncontrado) {
            console.log("login encontrado")
            logar();
          } else {
            setErroLogin("CPF ou senha inválidos");
          }
        })
        .catch(error => {
          console.error('Erro ao buscar lista de logins:', error);
          setErroLogin('Ocorreu um erro ao realizar o login. Por favor, tente novamente mais tarde.');
        });
    }
  };

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

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={{ color: '#fbfbfb', fontSize: "1rem", fontWeight: '600' }}>Entrar</Text>
      </TouchableOpacity>

      <Text>{erroLogin}</Text>
      <TouchableOpacity onPress={abrirModalEsqueciSenha}>
        <Text style={{ color: '#fbfbfb', fontSize: "0.9rem", fontWeight: '600', marginTop: '1rem', textDecorationLine: 'underline' }}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalEsqueciSenhaVisible}
        onRequestClose={fecharModalEsqueciSenha}
      >
        <View>
          <EsqueciSenha fecharModalEsqueciSenha={fecharModalEsqueciSenha} />
        </View>
      </Modal>
    </View>
  )
}

export default Login;
