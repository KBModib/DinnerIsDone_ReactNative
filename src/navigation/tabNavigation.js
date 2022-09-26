import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavouritesScreens from '../screens/FavouritesScreens';
import RestaurantReserved from '../screens/RestaurantReserved';

import {Entypo } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer   >
       
    <Tab.Navigator

    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'magnifying-glass' : 'magnifying-glass';
          }else if (route.name === 'Bookings') {
            iconName = focused ? 'book' : 'book';
          }else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outlined';
          } 

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
         
        },
        tabBarActiveTintColor: '#8C7C34',
        tabBarInactiveTintColor: '#29281D',
        tabBarStyle: {backgroundColor: '#E5DDDB'},
        headerShown: true,
        
      })}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookings" component={RestaurantReserved} />
      
      <Tab.Screen name="Favourites" component={FavouritesScreens } />
    </Tab.Navigator>
  </NavigationContainer>

  
  );
}