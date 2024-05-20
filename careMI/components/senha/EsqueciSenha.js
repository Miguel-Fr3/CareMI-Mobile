import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import SucessoSenha from './SucessoSenha';
import { style } from './style';

const EsqueciSenha = () => {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [erroCPF, setErroCPF] = useState('');
  const [modalSucessoVisible, setModalSucessoVisible] = useState(false);
  const [id, setId] = useState(null);

  const informarCPF = () => {
    if (!cpf) {
      setErroCPF('Por favor, informe o CPF');
      return;
    }

    fetch("http://localhost:8080/logins")
      .then(response => response.json())
      .then(data => {
        const loginEncontrado = data.find(login => login.cpf === cpf);
        if (!loginEncontrado) {
          setErroCPF('CPF Inválido');
        } else {
          setId(loginEncontrado.id);
          atualizarSenha(loginEncontrado.id);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar lista de logins:', error);
        setErroCPF('Por favor, tente novamente mais tarde.');
      });
  };

  const abrirModalSucesso = () => {
    setModalSucessoVisible(true);
  };

  const fecharModalSucesso = () => {
    setModalSucessoVisible(false);
  };

  const atualizarSenha = (id) => {
    fetch(`http://localhost:8080/logins/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cpf: cpf, senha: senha }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar a senha');
      }
      return response.json();
    })
    .then(data => {
      abrirModalSucesso();
    })
    .catch(error => {
      console.error('Erro ao atualizar a senha:', error);
    });
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>CareMI</Text>
      <Text style={{ color: '#fbfbfb', fontSize: "0.9rem", fontWeight: '600', marginTop: '1rem', textDecorationLine: 'underline', marginBottom: '1rem' }}>Esqueci minha senha?</Text>
      <View style={style.inputContainer}>
        <Text style={style.text}>Informe o número do CPF para criar uma nova senha</Text>
        <TextInput
          style={style.input}
          value={cpf}
          onChangeText={text => setCPF(text)}
          inputMode="numeric"
        />
      </View>

      {erroCPF ? <Text>{erroCPF}</Text> : null}
      <View style={style.inputContainer}>
        <Text style={style.text}>Informe a nova senha</Text>
        <TextInput
          style={style.input}
          value={senha}
          onChangeText={text => setSenha(text)}
          inputMode="keyboard"
        />
      </View>

      <TouchableOpacity style={style.button} onPress={() => informarCPF()}>
        <Text style={{color: "#fbfbfb"}}>Alterar</Text>
      </TouchableOpacity>
      <Modal
        visible={modalSucessoVisible}
        onRequestClose={fecharModalSucesso}
      >
        <View>
          <SucessoSenha fecharModalSucesso={fecharModalSucesso} />
        </View>
      </Modal>
    </View>
  );
};

export default EsqueciSenha;
