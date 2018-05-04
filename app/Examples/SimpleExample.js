import React from 'react'
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import * as theme from '../style/theme'

export default class SimpleExample extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <SafeAreaView style={styles.app}>
                <View style={styles.view}>
                    <Text style={styles.emoji}>🎉</Text>
                    <Text style={styles.text}>This is the Safe Area!</Text>
                    <Button title='Go back' onPress={() => { this.props.navigation.pop() }} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: theme.primary,
    },
    view: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 48
    },
    text: {
        marginTop: 10,
        marginBottom: 20
    }
});
