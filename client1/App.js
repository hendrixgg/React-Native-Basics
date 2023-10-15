import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BleManager from 'react-native-ble-manager';
import { NativeAppEventEmitter } from 'react-native';

/**
 * This function will accept details about a person and create an object for them.
 * 
 * @param {string} name The person's full name.
 * @param {number} age The person's age in years.
 * @param {boolean} hasBrainDamage Whether or not the person has brain damage.
 * @returns {{name: string, age: number, hasBrainDamage: boolean}} An object containing these three properties.
 */
function createPerson(name, age, hasBrainDamage) {
    return {
        name: name,
        age: age,
        hasBrainDamage: hasBrainDamage,
    }
}

export default function App() {
    const [bluetoothConnected, setBluetoothConnected] = useState(false);

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
