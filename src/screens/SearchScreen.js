import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react';
import { firebase } from '../Config';


export default function SearchScreen() {


  const [users , setUsers]= useState([]);
  const [loading, setLoading]=useState(false);
  const restaurantRef = firebase.firestore().collection('categories');
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
    <SafeAreaView>

        <Image
      source={require('../../assets/images/wallpaper.png')}
      style={styles.image}>

    </Image>



    <View 

     style={styles.line}
     />
     <View>
     <Text style={styles.label} >Filter search by</Text>

     </View>

      <ScrollView style={styles.scrol2} >
      <Text style={styles.label2} >Cuisines</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >

            <TouchableOpacity style={styles.cuisine}
              data={users}
              // numColumns={2}
              renderItem={({item})=>(
            <View style={styles.container2}>

<Text style={styles.txt} >Italian</Text>

                    {/* <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.name}>{item.Address}</Text> */}

                    </View>
                )}

      />

      {/* <Text style={styles.label2} >Category</Text> */}
        {/* // //     <TouchableOpacity style={styles.cuisine} */}
        {/* //       data={users}
        //       // numColumns={2}
        //       renderItem={({item})=>(
        //         <View style={styles.container2}> */}
{/*                
        //             <Text style={styles.label}>{item.name}</Text>
             
        //             <Text style={styles.address}>{item.Address}</Text>
                    
        //              <Text style={styles.address}>{item.Address}</Text>
        //        </View>
        //         )}
        // //    />
        //     <TouchableOpacity style={styles.cuisine}
        //       data={users} */}
        {/* //       // numColumns={2}
        //       renderItem={({item})=>( */}
{/* 
                <View style={styles.container2}>
               
                    <Text style={styles.label}>{item.name}</Text>
             
                    <Text style={styles.address}>{item.Address}</Text>
                    
                     <Text style={styles.address}>{item.Address}</Text>
               </View>
                )}
           />
        //     <TouchableOpacity style={styles.cuisine}
              data={users} */}
              {/* // numColumns={2}
              renderItem={({item})=>(
                <View style={styles.container2}>
               
        //             <Text style={styles.label}>{item.name}</Text>
             
        //             <Text style={styles.address}>{item.Address}</Text>
                    
        //              <Text style={styles.address}>{item.Address}</Text>
        //        </View>
        //         )}
        //    />
        //     <TouchableOpacity style={styles.cuisine}
              data={users} */}
              {/* // numColumns={2}
              renderItem={({item})=>( */}
{/* 
        //         <View style={styles.container2}>
               
        //             <Text style={styles.name}>{item.name}</Text>
             
        //             <Text style={styles.address}>{item.Address}</Text>
                    
        //              <Text style={styles.address}>{item.Address}</Text>
        //        </View>
        //         )}
        //    /> */}
                {/* <Image
                source={require('../../assets/italian.jpg')}
                >
                // </Image> */}

            {/* </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Mexican</Text>
            </TouchableOpacity>
	@@ -27,9 +151,9 @@ export default function SearchScreen() {
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Kota</Text>
            </TouchableOpacity> */}
        </ScrollView>
        {/* <Text style={styles.label2} >Category</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
            <TouchableOpacity style={styles.cuisine} >
                <Text style={styles.txt} >Indian</Text>
	@@ -57,11 +181,11 @@ export default function SearchScreen() {
            </TouchableOpacity>
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Italian</Text>
            </TouchableOpacity> */}

        </ScrollView>

        {/* </ScrollView> */}
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
        marginTop: 130,
        position:'absolute'
    },
    cuisine : {
    padding: 60,
    width: '22%',
    margin: 10,
    backgroundColor: '#f9f9f9'
    
    },
    name:{
        fontWeight:'bold',
         position:"absolute",
        fontSize: 20,
        top:270,
        left:153,
        backgroundColor:'red',
        color:'blue'
    },
    scroll :{
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
    }, 
    label2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        width: '70%',
        marginLeft: 17,
        marginTop: 185,
    }, 
    budget : {
        padding: 60,
        width: '30%',
        margin: 10,
        backgroundColor: '#f9f9f9',
        },
        scrol2: {
            marginBottom: 50,
        },
        image : {
            width: '35%',
            height: '20%',
            resizeMode: 'cover',
            justifyContent: 'center',
            // marginLeft: 5,
            position:"absolute",
            top:10,
            left:10,
        },
        line:{
            height:1,
            width:"100%",
            backgroundColor: 'black',
            position:"absolute",
            top:110,
          },
          container2: {
            flex: 1,
            // backgroundColor: '#fff',
        
          },
          txt:{
            color:'red'
          }
})