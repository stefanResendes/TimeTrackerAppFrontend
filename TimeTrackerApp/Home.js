import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {

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

    /* const ClockIn = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();

        setClockIn(hours+':'+min+':'+sec);
    }

    const ClockOut = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();

        setClockOut(hours+':'+min+':'+sec);
    } */

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    /* const [clockIn, setClockIn] = useState('');
    const [clockOut, setClockOut] = useState(''); */

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
            {/* <TouchableOpacity
                onPress = {
                    () => LogStuff(firstName, lastName, emailAddress, clockIn, clockOut)
            }>
                <Text>Log It</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
                onPress = {
                    () => ClockIn()
            }>
                <Text>Clock In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress = {
                    () => ClockOut()
            }>
                <Text>Clock Out</Text>
            </TouchableOpacity> */}
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