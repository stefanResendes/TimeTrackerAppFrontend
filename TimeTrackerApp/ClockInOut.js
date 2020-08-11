import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ClockScreen = () => {
    const ClockIn = () => {
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
    }

    const [clockIn, setClockIn] = useState('');
    const [clockOut, setClockOut] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity
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
            </TouchableOpacity>
        </View>
    );
}

export default ClockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});