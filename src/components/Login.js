import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { VStack, Input, Text, FormControl, Button, HStack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useUserStore } from '../stores/userStore';
import React from 'react'
import { supabase } from '../config/sbaseConfig';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("minast1rith")
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)


    //console.log(errors.email)
    const onSubmit = async () => {
        setLoading(true);
        let { user, error } = await supabase.auth.signIn({
            email: email.trim(),
            password: password
        })
        if (!user) {
            setLoading(false)
            error.message?.includes("email") ? setErrors({ ...errors, email: error.message }) :
                setErrors({ ...errors, password: error.message })
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled={true} >

            <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
                <VStack space={3} alignItems="center" mt={100} w="78%">
                    <View style={styles.circle}>
                        <Feather name="lock" color="black" size={24} />
                    </View>
                    <Text fontSize="lg" fontWeight="bold">Sign in</Text>

                    <FormControl isRequired isInvalid>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input placeholder="Enter your email..."
                            style={styles.email}

                            type="text"
                            isRequired={true}
                            value={email}
                            isInvalid={errors.email ? true : false}
                            onChangeText={(value) => setEmail(value)}
                            w="110%"
                            p={2}
                            variant="rounded" />
                        <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                        <FormControl.Label style={{ marginTop: 5 }}>Password</FormControl.Label>
                        <Input placeholder="Enter your password..."
                            style={styles.email}
                            w="110%"
                            isRequired={true}
                            p={2}
                            value={password}
                            isInvalid={'password' in errors}
                            type="password"

                            onChangeText={(value) => setPassword(value)}
                            variant="rounded" />

                        <FormControl.ErrorMessage >{errors.password}</FormControl.ErrorMessage>

                    </FormControl>
                    <View style={{ overflow: 'hidden', borderRadius: 50, width: "100%" }}>
                        <Button
                            w="110%"

                            isLoading={loading}
                            colorScheme="lightBlue"
                            variant="rounded"
                            shadow={9}
                            style={{ overflow: 'hidden', borderRadius: 80 }}
                            android_ripple={{ color: 'lightgray', borderless: true }}

                            _text={{ color: 'black' }}
                            onPress={() => {
                                return onSubmit()
                            }}

                        >
                            SIGN IN
                        </Button>
                    </View>
                    <HStack space={3} alignItems="center" >
                        <Button size="xs" variant="unstyled" _text={{ color: '#60a5fa' }} onPress={() => {
                            console.log('hello')
                        }}

                        >
                            Forgot Password?
                        </Button>
                        <Button size="xs" colorScheme="default" variant="unstyled"
                            _text={{ color: '#60a5fa' }}
                            onPress={() => { useUserStore.setState({ switchAuth: true }) }} >
                            Don't have an account? Sign Up
                        </Button>

                    </HStack>

                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#f4f4f5',
        alignItems: 'center',
        borderColor: 'black'
    },
    email: {
        paddingLeft: 10,
        textDecorationLine: 'none',
        borderColor: 'darkgray'
    },
    circle: {
        display: 'flex',
        // alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: "#fda4af",
    },
    button: {
        borderRadius: 50
    },

})

