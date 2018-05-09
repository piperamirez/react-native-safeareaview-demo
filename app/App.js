import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import * as theme from './style/theme'

import HomeScreen from './Home/HomeScreen'
import SimpleExample from './Examples/SimpleExample'
import NavigationExample from './Examples/NavigationExample'
import ScrollExample from './Examples/ScrollExample'
import FullscreenExample from './Examples/FullscreenExample'

import { createStackNavigator } from 'react-navigation'

const App = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    SimpleExample: {
        screen: SimpleExample
    },
    NavigationExample: {
        screen: NavigationExample,
        navigationOptions: {
            title: 'Navigation'
        }
    },
    ScrollExample: {
        screen: ScrollExample
    },
    FullscreenExample: {
        screen: FullscreenExample
    }
})

export default App