import React from 'react';
import { Text, View, SafeAreaView, ScrollView, FlatList, StyleSheet } from 'react-native';

  export default function FaqsPage() {

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <ScrollView style={styles.scroll}>
        <Text style={styles.subtitle}>How do I make a reservation?</Text>
        <Text style={styles.listitems}>You can make a reservation by clicking on the restaurant of your choice and selecting the date and time you would like to book. You will then be asked to enter your details and confirm your booking.</Text>
        <Text style={styles.subtitle}>How do I cancel a reservation?</Text>
        <Text style={styles.listitems}>You can cancel a reservation by clicking on the restaurant of your choice and selecting the date and time you would like to book. You will then be asked to enter your details and confirm your booking.</Text>
        <Text style={styles.subtitle}>How do I change a reservation?</Text>
        <Text style={styles.listitems}>You can change a reservation by clicking on the restaurant of your choice and selecting the date and time you would like to book. You will then be asked to enter your details and confirm your booking.</Text>
        <Text style={styles.subtitle}>How do I make a reservation?</Text>
        <Text style={styles.listitems}>You can make a reservation by clicking on the restaurant of your choice and selecting the date and time you would like to book. You will then be asked to enter your details and confirm your booking.</Text>
        </ScrollView>
      </SafeAreaView>
    )}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#E5DDDB'
      },
      title: {
        fontSize: 45,
        fontWeight: '400',
        color: '#29281D',
        paddingTop: 60,
        paddingBottom: 10,
        paddingRight: 30,
        paddingLeft: 30,
        alignItems: 'center',
      },
      subtitle: {
        fontSize: 20,
        fontWeight: '400',
        color: '#29281D',
        paddingTop: 35,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
      },
      listitems: {
        fontSize: 13,
        fontWeight: '400',
        color: '#8C7C34',
        paddingTop: 1,
        paddingBottom: 5,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
      },
    })