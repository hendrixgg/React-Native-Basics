import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appearance, useColorScheme } from 'react-native';

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
    let colorScheme = useColorScheme();

    const themeStyleText = colorScheme == 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme == 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={{ ...styles.container, ...themeContainerStyle }}>
            <Text style={{ ...styles.text, ...themeStyleText }}>{colorScheme == 'light' ? 'Light Theme Text.' : 'Dark Theme Text.'}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightContainer: {
        backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#000',
    },
    text: {
        fontFamily: 'Futura',
        fontSize: 30,
    },
    lightThemeText: {
        color: '#000',
    },
    darkThemeText: {
        color: '#fff',
    },
});
