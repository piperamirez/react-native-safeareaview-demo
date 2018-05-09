import React from 'react'
import { View, Text, Image, Button, StyleSheet, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import * as Animatable from 'react-native-animatable'

import * as theme from '../style/theme'

export default class FullscreenExample extends React.Component {
    static navigationOptions = { header: null }

    render() {
        return (
            <View style={style.view}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
                <Animatable.Image
                    animation='rotate'
                    iterationCount='infinite'
                    easing='linear'
                    duration={80000}
                    useNativeDriver={true}
                    resizeMode={'cover'}
                    style={{position: 'absolute', alignSelf: 'center'}}
                    source={require('../assets/spiral.png')}/>
                <Text style={style.text}>
                    Sometimes you might want to draw things outside the Safe Area.
                </Text>
                <View style={style.buttonContainer}>
                    <Button
                        title='Go back'
                        onPress={() => { this.props.navigation.pop() }} />
                </View>
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
    buttonContainer: {
        width: 120,
        alignSelf: 'center'
    },
    text: {
        marginTop: 30,
        marginBottom: 10,
        width: 150,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: '200',
        lineHeight: 23,
        color: theme.textColor
    }
})
