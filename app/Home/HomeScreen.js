import React from 'react'
import { StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

import * as theme from '../style/theme'

const introList = [
    {
        name: 'What is the Safe Area?',
        icon: 'help-outline',
        link: 'SimpleExample'
    }
]

const contentList = [
    {
        name: 'Safe Area and navigation elements',
        icon: 'navigation',
        link: 'NavigationExample'
    },
    {
        name: 'Safe Area and scrolling',
        icon: 'list',
        link: 'ScrollExample'
    },
    {
        name: 'Drawing outside the Safe Area',
        icon: 'crop-free',
        link: 'FullscreenExample'
    },
]

const creditsList = [
    {
        name: 'About',
        icon: 'flash-on',
        link: 'About'
    }
]

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Safe Area Examples 🍎'
    }

    drawElement = (item, i) => {
        return (
            <SafeAreaView key={i} forceInset={{ top: 'never', bottom: 'never', right: 'always', left: 'always' }}>
                <ListItem
                    title={ item.name }
                    subtitle={ item.subtitle }
                    leftIcon={{ name: item.icon, color: theme.primary }}
                    component={ TouchableOpacity }
                    onPress={() => {
                        this.props.navigation.navigate(item.link)
                    }} />
            </SafeAreaView>
        )
    }

    render() {
        return (
            <ScrollView>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"/>
                <SafeAreaView forceInset={{ top: 'never', bottom: 'always', right: 'never', left: 'never' }}>
                    <List>{introList.map(this.drawElement)}</List>
                    <List>{contentList.map(this.drawElement)}</List>
                    <List>{creditsList.map(this.drawElement)}</List>
                </SafeAreaView>
            </ScrollView>
        )
    }
}