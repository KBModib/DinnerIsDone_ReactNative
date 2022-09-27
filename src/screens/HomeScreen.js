import { StyleSheet, Dimensions , View, Text, ScrollView,  Image, SafeAreaView } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native';

// import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {useState, useEffect} from 'react';
// import Firestore from 'firestore';
import { firebase } from '../Config';
// export default function HomeScreen() {
  const HomeScreen = ({navigation}) => {
  // const navigation = useNavigation();

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
    
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>
        
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Search')}>
          <Fontisto name="search" size={25} color={'#8C7C34'} />
            <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
      </Text> */}
    

    <Image
      source={require('../../assets/images/wallpaper.png')}
      style={styles.image}>

    </Image>
    
    <View 
     style={styles.line}
     />
     
    
    {/* <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Explore Restaurants 
        
        <Entypo name="bowl" size={24} color="black" /></Text>
      </Pressable> */}
      <Image
      source={require('../../assets/images/istockphoto-598820096-612x612.jpeg')}
      style={styles.promo}>

    </Image>
    
      <FlatList
      
      // style={styles.list}
      data={users}
      // numColumns={2}
      renderItem={({item})=>(
        // <Pressable style={styles.safe}>
            <View style={styles.container2}>
              {/* <ScrollView style={styles.scroll}  horizontal={true} vertical={true} > */}
                
                <TouchableOpacity style={styles.e}>
               <Text style={styles.label}>{item.name}</Text>
             
             <Text style={styles.address}>{item.Address}</Text>
             <Image style={styles.photo1} source ={item.image}/>
               </TouchableOpacity>
              
               
                 {/* </ScrollView> */}
     
             
                        {/* <TouchableOpacity onPress={()=>{navigation.navigate('Details',{recipe:item.recipe})}}> */}
                            {/* <Text style={styles.detailss}>
                                View
                            </Text> */}
                        {/* </TouchableOpacity> */}
             
                {/* <Text style={styles.itemHeading}>{item.place}</Text> */}
            </View>
      )}
      />
      
  </SafeAreaView>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
  image: {
    width: '35%',
    height: '15%',
    resizeMode: 'cover',
    justifyContent: 'center',
    // marginLeft: 5,
    position:"absolute",
    top:10,
    left:10,


  },

  label:{
      fontWeight:'bold',
      position:"absolute",
      fontSize: 20,
      top:290,
      left:153,

  },
  photo1:{
    width:90,
    height: 80,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    // // marginLeft: 5,
    // position:"absolute",
    // backgroundColor:'blue',
     top:296,
     left:20,
     padding:10
  },
  e:{

  },
  promo:{
    width:"100%",
    height: '23%',
    resizeMode: 'cover',
    justifyContent: 'center',
    // marginLeft: 5,
    position:"absolute",
    top:145,
    left:10,
    zIndex:0

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E5DDDB',
    width: '50%',
  
  },
  line:{
    height:1,
    width:"90%",
    backgroundColor: 'black',
    position:"absolute",
    top:125,
    left:20
  },
  button: {
    backgroundColor: '#E5DDDB',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8C7C34'
  },

  searchButton: {
    backgroundColor: '#E5DDDB',
    height: 60,
    width: Dimensions.get('screen').width - 60,
    borderRadius: 30,
    marginHorizontal: 10,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
    padding: 20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // position:'absolute'
   
  },
  container2: {
    flex: 1,
    //backgroundColor: '#fff',
    // position:'relative',
  

  },
  address:{
    position:"absolute",
    fontSize: 15,
    top:320,
    left:155,
  },
  scroll :{
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
}, 
});
