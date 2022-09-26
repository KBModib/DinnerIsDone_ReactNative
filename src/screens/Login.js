import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Image
             source={require('../../assets/Logo.png')}
             style={styles.image}>
             </Image>
                <Text style={styles.text}>Welcome to the best app ever!</Text>
            </View>
            <View style={styles.body}>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Password" />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigation')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginOTP')}>
                    <Text style={styles.buttonText}>Login with OTP</Text>
                </TouchableOpacity>
                <Text style={styles.span2} 
            onPress={() => navigation.navigate('register')}
            >
                Not registered? Sign up
            </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: '#000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
    },
    text: {
        fontSize: 20,
    },
    image: {
        width: '97%',
        height: '20%',
        resizeMode: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    
      },
});
