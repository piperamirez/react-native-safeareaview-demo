import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'

import * as theme from './style/theme'

import HomeScreen from './Home/HomeScreen'
import SimpleExample from './Examples/SimpleExample'

import { StackNavigator } from 'react-navigation'

const App = StackNavigator({
    Home: { screen: HomeScreen },
    SimpleExample: { screen: SimpleExample }
})

export default App