import React from 'react';
import { Text, View, SafeAreaView, ScrollView, FlatList, StyleSheet } from 'react-native';

export default function RulesPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
      <Text style={styles.title}>House Rules</Text>
        <FlatList style={styles.listcontainer}
        
          data={[
            { key: 'Do not allow anyone else to use your profile or login credentials. Dinner is Done reserves the right to suspend or deactivate your account.' },
            { key: 'Dinner is Done are a third-party reservation service. Each reataurant has its terms and conditions to adhere to.' },
            { key: 'Reservation approval is solely handled by the restaurants and you need to ensure approval on the app before going to the establishment.' },
            { key: 'Dinner is Done is not responsible for anything that could go wrong with your booking and any penalties you may incur with/at the restaurant.' },
            { key: 'You need to directly notify the restaurant if you have any special requests for parties more than 10 and for special occassions.' },
            { key: 'All the information about the restaurants (Titles, menus, operating hours, images, prices, and additional text) is provided and confirmed by the establishments. All app update releases are done with what is agree to as correct at the time of release. Dinner is Done shall not be held liable for any discrepancies found.' },
            { key: 'Dinner is Done is not a food delivery service nor do we sell any products. We do not have a payment system integrated to the app. If you find anything of this sort kindly report this to support@dinnerid.com.' },
            { key: 'Discounts found on our app are to be used for reservations made on the Dinner is Done app only. The system will detect if a promotional code is used without a user profile linked to it and the restaurant and Dinner is Done holds the right to penalise you accordingly.' },
            { key: 'Enjoy skipping the queues, enjoy the great deals we have and do not forget to say Dinner is Done!' },
          ]}
          renderItem={({ item }) => {
            return (
              <ScrollView style={styles.scroll}>
                <Text style={styles.listitems}>{item.key}</Text>
              </ScrollView>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DDDB',
  },
  subcontainer: { 
    paddingTop: 60,
    paddingBottom: 10, 
    alignItems: 'center'
  },
  title: { 
    fontSize: 40,
    fontWeight: '400',
    color: '#29281D',
  },
  listcontainer: { 
    paddingTop: 35, 
    paddingBottom: 20, 
    paddingLeft: 30, 
    paddingRight: 30,
    justifyItems: 'justify'
},
scroll: { 
  marginBottom: 8 
},
listitems: { 
  fontSize: 13,
  color: '#8C7C34',
  textAlign: 'justify'
 }
});