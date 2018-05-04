import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

export default class App extends React.Component {
    render() {
      return (
        <SafeAreaView style={styles.app}>
            <View style={styles.view} />
        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#4ED8D0',
    },
    view: {
        flex: 1,
        backgroundColor: 'white',
    }
});
