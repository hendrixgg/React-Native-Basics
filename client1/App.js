import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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



// Using SafeAreaView
import { SafeAreaView } from 'react-native-safe-area-context';
function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

// Using useSafeAreaInsets
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// function HomeScreen() {
//     const insets = useSafeAreaInsets();
//     return (
//         <View style={{ ...styles.container, paddingTop: insets.top }}>
//             <Text>Open up App.js to start working on your app!</Text>
//             <StatusBar style="auto" />
//         </View >
//     );
// }

export default function App() {
    return (
        <SafeAreaProvider>
            <HomeScreen />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
    },
});
