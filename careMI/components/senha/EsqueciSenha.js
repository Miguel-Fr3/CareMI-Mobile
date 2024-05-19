import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import SucessoSenha from './SucessoSenha';

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
    <View>
      <Text>CareMI</Text>
      <Text>Esqueci minha senha?</Text>
      <Text>Informe o número do CPF para criar uma nova senha</Text>
      <TextInput
        value={cpf}
        onChangeText={text => setCPF(text)}
        inputMode="numeric"
      />
      {erroCPF ? <Text>{erroCPF}</Text> : null}
      <Text>Informe a nova senha</Text>
      <TextInput
        value={senha}
        onChangeText={text => setSenha(text)}
        inputMode="keyboard"
      />
      <TouchableOpacity onPress={() => informarCPF()}>
        <Text>Alterar</Text>
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
