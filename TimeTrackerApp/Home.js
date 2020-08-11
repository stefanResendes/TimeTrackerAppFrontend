import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

    /* const LogStuff = (firstName, lastName, email, clockIn, clockOut) => {
        console.log(firstName + ' ' + lastName + ' ' + email);
        console.log(clockIn);
        console.log(clockOut);

        var start = clockIn.split(':');
        var end = clockOut.split(':');

        var startDate = new Date(0, 0, 0, start[0], start[1], start[2]);
        var endDate = new Date(0, 0, 0, end[0], end[1], end[2]);

        var diff = endDate.getTime() - startDate.getTime();
        var diffHours = Math.floor(diff / 1000 / 60 / 60);
        diff -= diffHours * 1000 * 60 * 60;
        var diffMins = Math.floor(diff / 1000 / 60);

        console.log(diffHours + ':' + diffMins);
    } */

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