import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import TodoScreen from '../screens/TodoScreen';
import { FontAwesome } from '@expo/vector-icons';
import { IconButton, Icon } from "native-base"
import { supabase } from '../config/sbaseConfig';



const Stack = createStackNavigator()
const MainStack = () => {

    const signout = async () => {
        let { error } = await supabase.auth.signOut()
        if (error) {
            console.log(error)
        }
    }


    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={TodoScreen}
                options={{
                    headerRight: () => (
                        <IconButton
                            mr={2}
                            onPress={() => {
                                signout()
                            }}
                            variant="unstyled"
                            icon={<Icon size="sm" as={FontAwesome} name="power-off" color="black" />}
                        />
                    )
                }} />
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})
