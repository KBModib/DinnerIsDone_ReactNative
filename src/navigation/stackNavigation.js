import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginOTP from "../screens/LoginOTP";
import Login from "../screens/Login"
import TabNavigation from "./tabNavigation";

const StackNavigation = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name="LoginEmail" component={Login} options={{headerShown : false}}/>
                <StackNavigation.Screen name="LoginOTP" component={LoginOTP} />
                <StackNavigation.Screen name="TabNavigation" component={TabNavigation} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};