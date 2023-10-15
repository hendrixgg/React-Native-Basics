import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
    const [name, setName] = useState("joe");
    const [age, setAge] = useState(23);
    return (
        <View style={styles.container}>
            <Text>Enter your name: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                placeholder='Enter your name'
            />
            <Text>Enter your age: </Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setAge(parseInt(text))}
                placeholder='Enter your age'
                keyboardType='numeric'
            />
            <Text>My name is {name} and I am {isNaN(age) ? "-" : age} years old.</Text>
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
    input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: 150
    }
});
