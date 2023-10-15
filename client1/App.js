import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Different kind of text!</Text>
            <Text>This is default text.</Text>
            <StatusBar style='auto' hidden={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: "green",
        fontWeight: "bold",
        fontStyle: "italic",
        backgroundColor: "yellow"
    }
});
