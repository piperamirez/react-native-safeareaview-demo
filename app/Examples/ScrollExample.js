import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import ScrollContent from './ScrollContent'

import * as theme from '../style/theme'

export default class ScrollExample extends React.Component {
    static navigationOptions = { header: null }
    render() {
        return (
            <SafeAreaView style={{backgroundColor: 'white'}} forceInset={{ top: 'always', bottom: 'always', right: 'always', left: 'always' }}>
                <ScrollView style={theme.view.content}>
                    <ScrollContent navigation={this.props.navigation} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}