import { View, Text, Image } from 'react-native'
import React from 'react'
import Error from '../../assets/images/error.png'
import { style } from './style'


const Erro = () => {

    return(
        <View style={style.errorContainer}>
            <Text style={style.errorTittle}>OOPS! não foi possível concluir sua solicitação</Text>
            <Image source={Error} style={{ width: 200, height: 200 }} ></Image>
        </View>
    )

}

export default Erro;