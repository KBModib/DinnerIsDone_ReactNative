// import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
// import React from 'react'
// import {useState, useEffect} from 'react';
// import { firebase } from '../Config';


// export default function SearchScreen() {


// //   const [users , setUsers]= useState([]);
// //   const [loading, setLoading]=useState(false);
// //   const restaurantRef = firebase.firestore().collection('categories');
// //   async function getData(){
// //       restaurantRef
// //       .onSnapshot(
// //           querySnapshot=>{
// //               const users = []
// //               querySnapshot.forEach((doc)=>{
// //                   const{ name,Address, website,image} = doc.data()
// //                   users.push({
// //                       id:doc.id,
// //                       name,
// //                       Address,
// //                       website,
// //                       image,
// //                   })
// //               })
// //               setUsers(users)
// //           }
// //       )
// //   }
// //   useEffect(()=>{
// //       getData();
// //   },[])
//   return (
//     <SafeAreaView>

//         <Image
//       source={require('../../assets/images/wallpaper.png')}
//       style={styles.image}>

//     </Image>



//     <View 

//      style={styles.line}
//      />
//      <View>
//      <Text style={styles.label} >Filter search by</Text>

//      </View>

//       <ScrollView style={styles.scrol2} >
//       <Text style={styles.label2} >Cuisines</Text>
//         <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >

//             <TouchableOpacity style={styles.cuisine}>
//             <Text style={styles.txt} >Indian</Text>

//             </TouchableOpacity>
//                  <TouchableOpacity style={styles.cuisine} >
//                      <Text style={styles.txt} >Kota</Text>
//                  </TouchableOpacity> 

//       {/* <Text style={styles.label2} >Category</Text> */}
//         {/* // //     <TouchableOpacity style={styles.cuisine} */}
//         {/* //       data={users}
//         //       // numColumns={2}
//         //       renderItem={({item})=>(
//         //         <View style={styles.container2}> */}
// {/*                
//         //             <Text style={styles.label}>{item.name}</Text>
             
//         //             <Text style={styles.address}>{item.Address}</Text>
                    
//         //              <Text style={styles.address}>{item.Address}</Text>
//         //        </View>
//         //         )}
//         // //    />
//         //     <TouchableOpacity style={styles.cuisine}
//         //       data={users} */}
//         {/* //       // numColumns={2}
//         //       renderItem={({item})=>( */}
// {/* 
//                 <View style={styles.container2}>
               
//                     <Text style={styles.label}>{item.name}</Text>
             
//                     <Text style={styles.address}>{item.Address}</Text>
                    
//                      <Text style={styles.address}>{item.Address}</Text>
//                </View>
//                 )}
//            />
//         //     <TouchableOpacity style={styles.cuisine}
//               data={users} */}
//               {/* // numColumns={2}
//               renderItem={({item})=>(
//                 <View style={styles.container2}>
               
//         //             <Text style={styles.label}>{item.name}</Text>
             
//         //             <Text style={styles.address}>{item.Address}</Text>
                    
//         //              <Text style={styles.address}>{item.Address}</Text>
//         //        </View>
//         //         )}
//         //    />
//     //     //     <TouchableOpacity style={styles.cuisine}
            
      

//             {/* </TouchableOpacity>
//             <TouchableOpacity style={styles.cuisine} >
//                 <Text style={styles.txt} >Mexican</Text>
//             </TouchableOpacity>
// 	@@ -27,9 +151,9 @@ export default function SearchScreen() {
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.cuisine} >
//                 <Text style={styles.txt} >Kota</Text>
//             </TouchableOpacity> */}
//         </ScrollView>
//         {/* <Text style={styles.label2} >Category</Text>
//         <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
//             <TouchableOpacity style={styles.cuisine} >
//                 <Text style={styles.txt} >Indian</Text>
// 	@@ -57,11 +181,11 @@ export default function SearchScreen() {
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.budget} >
//                 <Text style={styles.txt} >Italian</Text>
//             </TouchableOpacity> */}

//         </ScrollView>

//         {/* </ScrollView> */}
//     </SafeAreaView>
//   )
// }
// const styles = StyleSheet.create({
//     label: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: 'black',
//         width: '70%',
//         marginLeft: 15,
//         marginTop: 130,
//         position:'absolute'
//     },
//     cuisine : {
//     padding: 60,
//     width: '22%',
//     margin: 10,
//     backgroundColor: '#f9f9f9'
    
//     },
//     name:{
//         fontWeight:'bold',
//          position:"absolute",
//         fontSize: 20,
//         top:270,
//         left:153,
//         backgroundColor:'red',
//         color:'blue'
//     },
//     scroll :{
//         flexDirection: 'row',
//         marginBottom: 10,
//         marginTop: 15,
//     }, 
//     label2: {
//         fontSize: 25,
//         fontWeight: 'bold',
//         color: 'black',
//         width: '70%',
//         marginLeft: 17,
//         marginTop: 185,
//     }, 
//     budget : {
//         padding: 60,
//         width: '30%',
//         margin: 10,
//         backgroundColor: '#f9f9f9',
//         },
//         scrol2: {
//             marginBottom: 50,
//         },
//         image : {
//             width: '35%',
//             height: '20%',
//             resizeMode: 'cover',
//             justifyContent: 'center',
//             // marginLeft: 5,
//             position:"absolute",
//             top:10,
//             left:10,
//         },
//         line:{
//             height:1,
//             width:"90%",
//             backgroundColor: 'black',
//             position:"absolute",
//             top:125,
//             left:20
//           },
//           container2: {
//             flex: 1,
//             // backgroundColor: '#fff',
        
//           },
//           txt:{
//             color:'red'
//           }
// })




import { SafeAreaView, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, BackgroundImage, Image } from 'react-native'
import React from 'react'

const image = { uri: "https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg" };
const imageMexican = { uri: "https://www.lacademie.com/wp-content/uploads/2022/01/popular-mexican-foods.jpg" };
const imageMediterranean = { uri: "https://static.toiimg.com/photo/84895387.cms" };
const imageChinese = { uri: "https://www.thespruceeats.com/thmb/X6mg_2VBCQQ2X8VrLcPTf8_4ce0=/2733x2050/smart/filters:no_upscale()/chinese-take-out-472927590-57d31fff3df78c5833464e7b.jpg" };
const imageCafe = { uri: "https://image-prod.iol.co.za/16x9/800/Full-service-cafe-bar-and-cocktail-franchise-restaurant-News-Cafe-opened-a-branch-in-Davenport-on-Thursday-Picture-Joelene-Sudhu-Marimuthu-Facebook?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/1879af7e-a4cf-5512-a027-a4fe3e6701ba&operation=CROP&offset=0x338&resize=2048x1152" };
const imageFineDining = { uri: "https://media.gq-magazine.co.uk/photos/60d5ac0ebb8986e188ac69e6/master/pass/24062021_food_hp.jpg" };


export default function SearchScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.label} >Filter search by</Text>
      <ScrollView style={styles.scrol2} >
      <Text style={styles.label2} >Cuisines</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
            <TouchableOpacity style={styles.cuisine}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt}>Italian</Text>   
             </ImageBackground>
         
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
            <ImageBackground source={imageMexican} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Mexican</Text>
             </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
            <ImageBackground source={imageMediterranean} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Mediterranean</Text>

             </ImageBackground>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.cuisine} >
            <ImageBackground source={imageChinese} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Chinese</Text>
            </ImageBackground>
    
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
            <ImageBackground source={imageChinese} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Chinese</Text>
            </ImageBackground>
            </TouchableOpacity>
        </ScrollView>
        <Text style={styles.label2} >Category</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
            <TouchableOpacity style={styles.cuisine} >
            <ImageBackground source={imageCafe} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Cafe</Text>
            </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
            <ImageBackground source={imageFineDining} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt}>Fine Dining</Text>
            </ImageBackground>         
               </TouchableOpacity>
            <TouchableOpacity style={styles.cuisine} >
        <ImageBackground source={imageCafe} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Pop-Up</Text>
            </ImageBackground>          
              </TouchableOpacity>
              <TouchableOpacity style={styles.cuisine} >
        <ImageBackground source={imageCafe} resizeMode="cover" style={styles.image}>
            <Text style={styles.txt} >Casual Dining</Text>
            </ImageBackground>          
              </TouchableOpacity>
        </ScrollView>
        <Text style={styles.label2} >Budget</Text>
        <ScrollView style={styles.scroll}  horizontal={true} vertical={true} >
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Indian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Mexican</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.budget} >
                <Text style={styles.txt} >Italian</Text>
            </TouchableOpacity>
            
        </ScrollView>
       
        </ScrollView>
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
        marginTop: 30,
    },
    cuisine : {
    padding: 20,
    width: 170,
    height: 110,
    margin: 10,
    backgroundColor: '#f9f9f9'
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
        marginLeft: 25,
        marginTop: 5,
    }, 
    budget : {
        padding: 60,
        width: '30%',
        margin: 10,
        backgroundColor: '#f9f9f9'
        },
        scrol2: {
            marginBottom: 50,
        },
        image : {
            padding: 20,
            width: 170,
            height: 110,
            margin: -20,

                },
    txt:{
        color:'yellow',
        fontSize: 20,
         fontWeight: 'bold',
         padding:20
    },
 
})
