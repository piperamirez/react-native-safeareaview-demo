import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import * as theme from './style/theme'

import HomeScreen from './Home/HomeScreen'

import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
    Home: { screen: HomeScreen }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

export default App