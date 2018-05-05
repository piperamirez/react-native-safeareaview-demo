import React from 'react'
import { StatusBar, StyleSheet, Text, View, Button, Linking } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import * as theme from '../style/theme'

export default class SimpleExample extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <SafeAreaView style={styles.app} forceInset={{ top: 'always', bottom: 'always', right: 'always', left: 'always' }}>
                <View style={styles.view}>
                    <Text style={theme.text.title}>What is the Safe Area? 🤔</Text>
                    <Text style={theme.text.paragraph}>
                        The Safe Area is a rectangular region defined in UIKit
                        that aids with positioning of content in iOS devices,
                        specially the iPhone X.
                    </Text>
                    <Text style={theme.text.paragraph}>
                        In this screen everything
                        in <Text style={{ color: theme.primary }}>●</Text> color
                        is outside the Safe Area. Try rotating the screen in
                        different devices to see the differences.
                    </Text>
                    <Text style={theme.text.paragraph}>
                        More on Safe Area and Layout Guides can be found
                        in <Text style={theme.text.link} onPress={() => { Linking.openURL('https://developer.apple.com/ios/human-interface-guidelines/visual-design/adaptivity-and-layout/') }}>
                            Apple Developer Human Interface Guidelines
                        </Text>.
                    </Text>
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
        justifyContent: 'center',
        padding: 30
    }
})
