import { StyleSheet, SafeAreaView, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

export default function FavouritesScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label}>My Favourite spots</Text>
        <FlatList>
          
        </FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    width: '70%',
    marginLeft: 15,
    marginTop: 25,
  },
});
