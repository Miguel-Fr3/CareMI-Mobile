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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        backgroundColor: '#008080',
        padding: '0.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: '5rem',
        borderRadius: '16px',
        marginTop: '3rem',
        marginBottom: '8rem',
        
    },
    label: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#000',
        marginTop: '1rem',
    
    },
    input: {       
        width: 250,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#fbfbfb',
        padding: 10,
        borderRadius: 5,
    },
    inputLabel: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
    },
    text: {
        fontSize: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fbfbfb',
    },
    buttonI: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        backgroundColor: '#0E3535',
        padding: '0.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: '16px',
        marginTop: '3rem',
        marginBottom: '8rem',
        
    },
    buttonA: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        backgroundColor: '#008080',
        padding: '0.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: '16px',
        marginTop: '3rem',
        marginBottom: '8rem',
        
    },
});


export default { style }