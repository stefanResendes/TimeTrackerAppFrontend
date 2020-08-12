import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style = {{height: 40}} 
                placeholder = "First Name"
                onChangeText = {firstName => setFirstName(firstName)}
                defaultValue = {firstName}
            />
            <TextInput
                style = {{height: 40}} 
                placeholder = "Last Name"
                onChangeText = {lastName => setLastName(lastName)}
                defaultValue = {lastName}
            />
            <TextInput
                style = {{height: 40}} 
                placeholder = "Email Address"
                onChangeText = {emailAddress => setEmailAddress(emailAddress)}
                defaultValue = {emailAddress}
            />
            <Button
                title="Log In"
                onPress = {() =>
                    navigation.navigate('Clock', { fname: firstName, lname: lastName, email: emailAddress })
                }
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});