import { View, Text, Image } from 'react-native'
import React from 'react'
import Error from '../../assets/images/error.png'


const Erro = () => {

    return(
        <View>
            <Text>OOPS! não foi possível concluir sua solicitação</Text>
            <Image source={Error} style={{ width: 100, height: 100 }} ></Image>
        </View>
    )

}

export default Erro;