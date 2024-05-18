import {Text, View, TouchableOpacity} from 'react-native';

const Home = () => { 

    return ( 
      <View>
        <Text>Olá, Bem Vindo!</Text>

        <TouchableOpacity>
            <Text>Acessar exames</Text>
        </TouchableOpacity>

        
        <TouchableOpacity>
            <Text>Agendamento Online</Text>
        </TouchableOpacity>

        
        <TouchableOpacity>
            <Text>Consulta</Text>
        </TouchableOpacity>

        
        <TouchableOpacity>
            <Text>Assistente Virtual</Text>
        </TouchableOpacity>

       <Text>© 2024  CareMI, Inc.</Text>
      </View>
    )
  }
  
export default Home;