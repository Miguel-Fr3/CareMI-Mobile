import { View, Text, Image } from 'react-native'
import React from 'react'
import Sucesso from '../../assets/images/sucesso.png'


const SucessoAgendamento = () => {

    return(
        <View>
            <Text>Agendamento realizado com sucesso!</Text>
            <Image source={Sucesso} style={{ width: 100, height: 100 }} ></Image>

            
        </View>
    )

}

export default SucessoAgendamento;