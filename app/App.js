import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import * as theme from './style/theme'

import HomeScreen from './Home/HomeScreen'
import SimpleExample from './Examples/SimpleExample'
import NavigationExample from './Examples/NavigationExample'

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
     }
})

export default App