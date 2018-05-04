import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import * as theme from '../style/theme'

export default class SimpleExample extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    }
    render() {
        return (
            <SafeAreaView style={styles.app}>
                <View style={styles.view}>
                    <Text>This is the Safe Area! 🎉</Text>
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
