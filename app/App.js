import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import * as theme from './style/theme'

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.app}>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"/>
                <View style={styles.view}>
                    <Text>Yay! 🎉</Text>
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
    }
});
