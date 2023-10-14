import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'; // You can use Fonts.loadAsync instead if you want a more fine-grained control over when your fonts are loaded and before rendering.
import * as SplashScreen from 'expo-splash-screen'; // This gives me control over the splash screen.

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

// This is done so that we can toggle the splash screen once the custom fonts have loaded.
SplashScreen.preventAutoHideAsync();

/**
 * 
 * @returns Entry point into the app.
 */
export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'Futura-Regular': require('./assets/fonts/Futura-Regular.ttf'),
    });

    // Hides the splash screen once fonts are done loading.
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // Returns null if fonts are not loaded.
    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <Text>Default font.</Text>
            <Text style={{ fontFamily: "Futura-Regular" }}>Futura Regular font.</Text>
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
