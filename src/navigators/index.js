import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Auth from './AuthStack'

export default () => {
    return (
        <NavigationContainer>

            <Auth />

        </NavigationContainer>

    )
}


