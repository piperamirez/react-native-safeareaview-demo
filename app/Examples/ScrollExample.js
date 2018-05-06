import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import ScrollContent from './ScrollContent'

import * as theme from '../style/theme'

export default class ScrollExample extends React.Component {
    static navigationOptions = { title: 'Scrolling' }
    render() {
        return (
            <SafeAreaView style={{backgroundColor: 'white'}} forceInset={{ top: 'never', bottom: 'always', right: 'never', left: 'never' }}>
                <ScrollView style={theme.view.content}>
                    <ScrollContent />
                </ScrollView>
            </SafeAreaView>
        )
    }
}