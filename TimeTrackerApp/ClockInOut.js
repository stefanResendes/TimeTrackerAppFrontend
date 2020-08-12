import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ClockScreen = ({ route, navigation }) => {
    const ClockIn = () => {
        var inDate = new Date().getDate();
        var inMonth = new Date().getMonth() + 1;
        var inYear = new Date().getFullYear();
        var inHour = new Date().getHours();
        var inMin = new Date().getMinutes();
        var inSec = new Date().getSeconds();

        setClockInDate(inMonth+'/'+inDate+'/'+inYear);
        setClockIn(inHour+':'+inMin+':'+inSec);
    }

    const ClockOut = () => {
        var outDate = new Date().getDate();
        var outMonth = new Date().getMonth() + 1;
        var outYear = new Date().getFullYear();
        var outHour = new Date().getHours();
        var outMin = new Date().getMinutes();
        var outSec = new Date().getSeconds();

        setClockOutDate(outMonth+'/'+outDate+'/'+outYear)
        setClockOut(outHour+':'+outMin+':'+outSec);

        var inTime = clockIn.split(':');
        
        var startDate = new Date(0, 0, 0, inTime[0], inTime[1], inTime[2]);
        var endDate = new Date(0, 0, 0, outHour, outMin, outSec);

        var diff = endDate.getTime() - startDate.getTime();
        var diffHours = Math.floor(diff / 1000 / 60 / 60);
        diff -= diffHours * 1000 * 60 * 60;
        var diffMins = Math.floor(diff / 1000 / 60);

        setTime(diffHours + ':' + diffMins);        
    }

    const EnterTime = (firstName, lastName, emailAddress, inClockDate, inClockTime, outClockDate, outClockTime) => {
        var data = {
            timetracker_firstname: firstName,
            timetracker_lastname: lastName,
            timetracker_emailaddress: emailAddress,
            timetracker_clockindate: inClockDate,
            timetracker_clockintime: inClockTime,
            timetracker_clockoutdate: outClockDate,
            timetracker_clockouttime: outClockTime
        }
        fetch('http://192.168.1.13:3000/timetracker/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    const [clockIn, setClockIn] = useState('');
    const [clockOut, setClockOut] = useState('');
    const [clockInDate, setClockInDate] = useState('');
    const [clockOutDate, setClockOutDate] = useState('');


    const [time, setTime] = useState('');

    const { fname } = route.params;
    const { lname } = route.params;
    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text>Total Time: {time}</Text>
            <TouchableOpacity
                style = {styles.clockButtons}
                onPress = {
                    () => ClockIn()
            }>
                <Text>Clock In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.clockButtons}
                onPress = {
                    () => ClockOut()
            }>
                <Text>Clock Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.clockButtons}
                onPress = {
                    () => EnterTime(fname, lname, email, clockInDate, clockIn, clockOutDate, clockOut)
            }>
                <Text>Submit</Text>
            </TouchableOpacity>
            <Button
                title="Summary"
                onPress = {() =>
                    navigation.navigate('Summary', {})
                }
            />
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
    clockButtons: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
});