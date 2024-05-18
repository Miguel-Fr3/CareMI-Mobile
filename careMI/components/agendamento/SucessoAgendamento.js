import { View, Text } from 'react-native'
import React from 'react'
import Sucesso from '../../assets/images/sucesso.svg'


const SucessoAgendamento = () => {

    return(
        <View>
            <Text>Agendamento realizado com sucesso!</Text>
            <Image source={Sucesso}></Image>
        </View>
    )

}

export default SucessoAgendamento;