import {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => { 
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const navigation = useNavigation();
    
    return ( 
      <View>
        <Text>CareMI</Text>

        <Text>CPF</Text>
        <TextInput value={cpf} onChangeText={setCpf}/>

        <Text>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} secureTextEntry={true}/>

        <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
        }}>
            <Text>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
export default Login;