import { StyleSheet, SafeAreaView, Text,FlatList, View, Image } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react';
import { firebase } from '../Config';

export default function RestuarantReserved() {
  
  const [users , setUsers]= useState([]);
  const [loading, setLoading]=useState(false);
  const restaurantRef = firebase.firestore().collection('restaurants');
 async function getData(){
      restaurantRef
      .onSnapshot(
          querySnapshot=>{
              const users = []
              querySnapshot.forEach((doc)=>{
                  const{ name,Address, website,image} = doc.data()
                  users.push({
                      id:doc.id,
                      name,
                      Address,
                      website,
                      image,
                  })
              })
              setUsers(users)
          }
      )
  }
  useEffect(()=>{
      getData();
  },[])
  return (
       <FlatList
      // style={styles.list}
      data={users}
      // numColumns={2}
      renderItem={({item})=>(
        // <Pressable style={styles.safe}>
            <View style={styles.container2}>
               
                    {/* <Text style={styles.label}>{item.name}</Text> */}
             
                    {/* <Text style={styles.address}>{item.Address}</Text> */}
                    <Image style={styles.photo1} source ={item.image}/>
             
                        {/* <TouchableOpacity onPress={()=>{navigation.navigate('Details',{recipe:item.recipe})}}> */}
                            {/* <Text style={styles.detailss}>
                                View
                            </Text> */}
                        {/* </TouchableOpacity> */}
             
                {/* <Text style={styles.itemHeading}>{item.place}</Text> */}
            </View>
      )}
      />
  )
}

const styles = StyleSheet.create({
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    width: '70%',
    marginLeft: 15,
    marginTop: 30,
  },

  container2: {
    flex: 1,
    // backgroundColor: '#fff',

  },
  
  photo1:{
    width:90,
    height: 80,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    // // marginLeft: 5,`
    // position:"absolute",
    // backgroundColor:'blue',
     top:250,
     left:90,
     padding:10
  },
});
