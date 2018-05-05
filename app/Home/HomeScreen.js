import React from 'react'
import { StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

import * as theme from '../style/theme'

const introList = [
    {
        name: 'What is the Safe Area?',
        subtitle: 'An introduction',
        icon: 'help-outline',
        link: 'SimpleExample'
    }
]

const contentList = [
    {
        name: 'Safe Area and nav/tab bars',
        icon: 'navigation',
        subtitle: 'Navigation elements should be touchable',
        link: 'nothing'
    },
    {
        name: 'Safe Area and scroll views',
        subtitle: 'Visible yet not touchable',
        icon: 'list',
        link: 'nothing'
    },
    {
        name: 'Drawing outside the Safe Area',
        icon: 'crop-free',
        subtitle: 'Sometimes we need to',
        link: 'nothing'
    },
]

const creditsList = [
    {
        name: 'Credits',
        icon: 'flash-on',
        link: 'nothing'
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
                <SafeAreaView forceInset={{ top: 'never', right: 'never', left: 'never' }}>
                    <List>{introList.map(this.drawElement)}</List>
                    <List>{contentList.map(this.drawElement)}</List>
                    <List>{creditsList.map(this.drawElement)}</List>
                </SafeAreaView>
            </ScrollView>
        )
    }
}