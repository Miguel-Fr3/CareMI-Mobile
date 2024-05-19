import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({

    errorContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorTittle: {
        fontSize: '1.5rem',
        marginTop: '6rem',
        width: '15rem',
        marginBottom: '7rem',
        fontWeight: '600',
        color: '#008080',
        textAlign: 'center'
    }
});


export default { style }