import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const About =() => {
  return (
    <SafeAreaView style={styles.container} >
    <TouchableOpacity style={styles.back} >
    <Ionicons name="md-arrow-back-sharp" size={50} color="black" />
    </TouchableOpacity>
    <Text style={styles.title} >About </Text>
    <Text style={styles.title2} >Dinner is Done!</Text>
    <Image
        source={require('./assets/Logo.png')}
        style={styles.image}>
    </Image>
    <Text style={styles.txt} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
     Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, imperdiet ut est. 
    
     
    </Text>
    <Text style={styles.txt2} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
     Morbi orci neque, congue nec porta in,  
     
    </Text>
    <Text style={styles.txt3} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum orci at odio accumsan, in dignissim neque mollis.
     Morbi orci neque, congue nec porta in, lobortis et justo. Nunc est magna, dapibus eu venenatis sit amet, 
      
     Aenean luctus, eros et facilisis varius, sapien mi aliquam arcu, 
     venenatis commodo leo urna a sapien.
    </Text>

  </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
    container :{
      flex: 1,
      backgroundColor: '#E5DDDB',
    },
    title : {
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 10,
      color : '#29281D',
    },
    title2 : {
      alignSelf: 'center',
      fontSize: 35,
      fontWeight: 'bold',
      
      marginBottom: 30,
      color : '#29281D',
    },
    image: {
      width: '97%',
      height: '20%',
      resizeMode: 'center',
      justifyContent: 'center',
      marginLeft: 5,
  
    },
    txt : {
      fontSize: 15,
      fontWeight: 'semibold',
      marginTop: 80,
      marginBottom: 5,
      color : "#8C7C34",
      marginLeft: 15,
    },
    txt2 : {
      fontSize: 15,
      fontWeight: 'semibold',
      marginTop: 5,
      marginBottom: 5,
      color : "#8C7C34",
      marginLeft: 15,
    },
    txt3 : {
      fontSize: 15,
      fontWeight: 'semibold',
      marginTop: 5,
      marginBottom: 5,
      color : "#8C7C34",
      marginLeft: 15,
    },
    back : {
      marginTop: 12,
    },

   })

