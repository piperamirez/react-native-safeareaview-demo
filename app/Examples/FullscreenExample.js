import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import * as Animatable from 'react-native-animatable'

import * as theme from '../style/theme'

export default class FullscreenExample extends React.Component {
    static navigationOptions = { header: null }

    render() {
        return (
            <View style={style.view}>
                <Text style={style.text}>
                    Sometimes you might want to draw things outside the Safe Area.
                </Text>
                <Animatable.Image
                    animation='rotate'
                    iterationCount='infinite'
                    easing='linear'
                    duration={80000}
                    resizeMode={'cover'}
                    style={{position: 'absolute', alignSelf: 'center'}}
                    source={require('../assets/spiral.png')}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    text: {
        width: 150,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '200',
        lineHeight: 23,
        color: theme.textColor
    }
})
