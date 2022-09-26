import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Image} from 'react-native'
import React, { useRef, useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../Config';
import { useNavigation } from '@react-navigation/native'

const login = () => {

  const navigation = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');

    const [code, setCode] = useState('');
 
    const [verificationId, setVerificationId] = useState(null);
 
    const recaptchaVerifier = useRef(null);
 
    const sendVerification = () => {
     const phoneProvider = new firebase.auth.PhoneAuthProvider();
     phoneProvider
         .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
         .then(setVerificationId);
         setPhoneNumber('');
    };
     const confirmCode = () => {
         const credential = firebase.auth.PhoneAuthProvider.credential(
             verificationId,
             code
         );
         firebase.auth().signInWithCredential(credential)
         .then(() => {
             setCode('')
         })
         .catch((error) => {
             // show an alert in case of error
             alert(error)
         })
         Alert.alert(
             'Login Successful. Welcome To Dinner Is Done',
         );
         navigation.navigate('TabNavigation')
     }

  return (
    <View style={styles.container} >
         <FirebaseRecaptchaVerifierModal
             ref={recaptchaVerifier}
             firebaseConfig={firebaseConfig}
             />
             <Image
             source={require('../../assets/Logo.png')}
             style={styles.image}>
             </Image>
             <Text style={styles.title} >Sign In</Text>
            <Text style={styles.txt}>Phone Number</Text>
      <TextInput
                 
                 onChangeText={setPhoneNumber}
                 keyboardType='phone-pad'
                 autoCompleteType='tel'
                 style={styles.textInput}
                 />
                 <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                     <Text style={styles.buttonText}>
                     Submit
                     </Text>
                 </TouchableOpacity>
                 <Text style={styles.txt}>OTP</Text>
                 <TextInput
                 placeholder=''
                 onChangeText={setCode}
                 keyboardType='number-pad'
                 style={styles.textInput}
                 />
                  <Text style={styles.span} 
            onPress={() => navigation.navigate('Login')}
            >
                Sign-in using email
            </Text>
                        <TouchableOpacity style={styles.sendCode}
                        onPress = {confirmCode} >
                     <Text style={styles.buttonText}>
                     Sign In
                     </Text>
                     
                 </TouchableOpacity>
                 <Text style={styles.span2} 
            onPress={() => navigation.navigate('register')}
            >
                Not registered? Sign up
            </Text>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F3D34B',
     
    },
    textInput:{
        height: 50,
        paddingTop: 10,
        width: 290,
         fontSize:24,
         marginLeft: 25,
         backgroundColor: '#fff',
         marginBottom:20,
         marginTop: 20,
        textAlign:'center',
         color:'black'
     },
     sendVerification:{
         padding:20,
         backgroundColor:'#fff',
         width:200,
         marginLeft: 70,
         height: 58,
      },
      sendCode:{
        padding:20,
         backgroundColor:'#fff',
         width:200,
         marginLeft: 70,
         height: 58,
         marginTop: 40,
      },
      buttonText:{
         textAlign:'center',
         color:'black',
         fontWeight:'bold',
         fontSize:20
      },
     
     otpText:{
     
         fontSize:24,
         fontWeight:'bold',
         color:'#fff',
         margin:20
     },
     title: {
        alignSelf: 'center',
        fontSize: 35,
        fontWeight: 'bold',
      },
      image: {
        width: '97%',
        height: '20%',
        resizeMode: 'center',
        justifyContent: 'center',
        marginLeft: 5,
    
      },
      txt: {
        fontSize: 15,
        fontWeight: 'semibold',
        marginLeft: 25,
      },
      span: {
        fontSize: 15,
        marginLeft: 25,
      },
      span2: {
        fontSize: 15,
        marginLeft: 90,
        marginTop: 35,
      },


})