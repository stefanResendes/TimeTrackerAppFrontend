import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const SummaryScreen = ({ navigation }) => {

    const refreshList = () => {
        fetch('http://192.168.1.13:3000/timetracker', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    }

    const [data, setData] = useState([]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style = {styles.button}
                onPress = {
                    () => refreshList()
                }>
                <Text>Refresh</Text>
            </TouchableOpacity>
            {
                data.map((item, index) => (
                    <Text>
                        {item.timetracker_clockindate}: {item.timetracker_clockintime} - {item.timetracker_clockouttime}

                    </Text>
                ))
            }
        </View>
    );
}

export default SummaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    buttonText: {
        color: 'white'
    }
});