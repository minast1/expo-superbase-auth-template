import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Box, VStack, Input, Text, FormControl, Button, HStack, Pressable } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const LoginScreen = () => {
    const [formData, setData] = useState({})
    const [errors, setErrors] = useState({})

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validate = () => {
        if (formData.email == undefined) {
            setErrors({ ...errors, email: 'Email field is required' });
            return false;
        } if (!formData.email.match(mailformat)) {
            setErrors({
                ...errors, email: 'Email address is invalid!'
            })
            return false;
        }
        if (formData.password == undefined) {
            setErrors({ ...errors, password: 'Password field is required' })
        }

        return true
    }
    console.log(formData.email)
    const onSubmit = () => {
        validate() ? console.log('Submitted') : console.log('Validation Failed')
    }
    return (
        <View style={styles.container}>
            <Box w="90%" rounded="lg" bg="gray.100" p={10}>
                <VStack space={3} alignItems="center">
                    <View style={styles.circle}>
                        <Feather name="lock" color="black" size={24} />
                    </View>
                    <Text fontSize="lg" fontWeight="bold">Sign in</Text>

                    <FormControl isRequired>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input placeholder="Enter your email"
                            style={styles.email}
                            type="text"

                            onChangeText={(value) => setData({ ...formData, email: value })}
                            w="110%"
                            p={2}
                            variant="rounded" />
                        <FormControl.ErrorMessage>{errors?.email}</FormControl.ErrorMessage>
                        <FormControl.Label style={{ marginTop: 5 }}>Password</FormControl.Label>
                        <Input placeholder="Enter your password"
                            style={styles.email}
                            w="110%"
                            p={2}
                            type="password"
                            onChangeText={(value) => setData({ ...formData, password: value })}
                            variant="rounded" />
                        <FormControl.ErrorMessage>{errors?.password}</FormControl.ErrorMessage>

                    </FormControl>
                    <View style={{ overflow: 'hidden', borderRadius: 50, width: "100%" }}>
                        <Button
                            w="110%"

                            isLoading={false}
                            colorScheme="lightBlue"
                            variant="rounded"

                            style={{ overflow: 'hidden', borderRadius: 80 }}
                            android_ripple={{ color: 'lightgray', borderless: true }}
                            // style={styles.button}
                            _text={{ color: 'black' }}
                            onPress={() => {
                                onSubmit()
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
                            onPress={() => {
                                console.log('hello')
                            }}

                        >

                            Don't have an account? Sign Up
                        </Button>

                    </HStack>

                </VStack>
            </Box>





        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: 70,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: 'black',

        justifyContent: 'center',
    },
    email: {
        paddingLeft: 10,
        textDecorationLine: 'none'
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
    }
})
