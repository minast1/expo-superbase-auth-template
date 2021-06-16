import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from '../screens/TodoScreen';


const Stack = createStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={TodoScreen} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})
