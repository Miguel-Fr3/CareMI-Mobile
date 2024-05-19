import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        backgroundColor: '#fbfbfb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tittle: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginTop: '3rem',
        marginBottom: '3rem',
        textAlign: 'center',
        color: '#008080',
    },
    button: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '20rem',
        marginLeft: '1rem',
        marginBottom: '4rem',

    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#008080',
        padding: '1rem',
        borderRadius: '3rem',
        marginRight: '1rem',
    },
    text: {
        fontSize: '1rem',
        width: '130px',
        marginLeft: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#008080',
    }
});


export default { style }