import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008080',
        width: '100%',
        display: 'flex',
    },
    
    title: {
        fontSize: '2rem',
        marginBottom: '5rem',
        marginTop: '5rem',
        fontWeight: '600',
        color: '#FBFBFB',
    },
    input: {
        backgroundColor: '#fbfbfb',
        padding: '0.6rem',
        borderRadius: '8px',
        width: '13rem'

    },
    text: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#FBFBFB',
        marginBottom: '0.5rem'
    },
    button: {
        marginTop: '1rem',
        backgroundColor: '#0e3535',
        padding: '0.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: '8rem',
        borderRadius: '16px',
    }
});


export default { style }