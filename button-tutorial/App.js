import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';

export default function App() {
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    return (
        <View style={styles.container}>
            <Button
                title={`Count: ${clickCount}`}
                color="red"
                onPress={() => {
                    setClickCount(count => count + 1);
                    setButtonDisabled(true);
                }}
                disabled={buttonDisabled}
            />
            <Button
                title="reset button"
                color="blue"
                onPress={() => {
                    // alert is a built-in function of react native
                    alert("You can click the other button now.");
                    setButtonDisabled(false);
                }}
                disabled={false}
            />
            <Button
                title="reset count"
                color="green"
                onPress={() => {
                    setClickCount(0);
                }}
                disabled={false}
            />
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
