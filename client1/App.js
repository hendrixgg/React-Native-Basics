import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { loadAsync } from 'expo-font'; // You can use Fonts.loadAsync instead if you want a more fine-grained control over when your fonts are loaded and before rendering.
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

// Keep the splash screen visible while resources (fonts) are loaded.
SplashScreen.preventAutoHideAsync();

/**
 * 
 * @returns Entry point into the app.
 */
export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls needed here.
                await loadAsync({
                    'Futura-Regular': require('./assets/fonts/Futura-Regular.ttf'),
                });
                // Artificiallly delay for two seconds to simulate a slow loading experience. DELETE this code if you are going to re-use it!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render.
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If this was called after `setAppIsReady`, then we may see a blank screen while the app is loading its initial state and rendering its first pixels. So instead, hide the splash screen once the root view has already performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
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
