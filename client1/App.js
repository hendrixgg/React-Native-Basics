import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

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
/**
 * This is the home screen of the app.
 * 
 * This component must be nested under a `SafeAreaProvider` component.
 * 
 * @returns {SafeAreaView} `SafeAreaView` component from the react-native-safe-area-context library.
 */
function HomeScreen1() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

// Using useSafeAreaInsets
/**
 * This is the home screen of the app.
 * 
 * This component must be nested under a `SafeAreaProvider` component.
 * 
 * @returns {View} Component from containing some text.
 */
function HomeScreen2() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ ...styles.container, paddingTop: insets.top }}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View >
    );
}

// Using nothing
/**
 * This is the home screen of the app.
 * 
 * 
 * @returns {View} Component containing some text.
 */
function HomeScreen3() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View >
    );
}



export default function App() {
    return (
        <SafeAreaProvider>
            {/* <HomeScreen1 /> */}
            {/* <HomeScreen2 /> */}
            <HomeScreen3 />
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
