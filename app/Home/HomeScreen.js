import React from 'react'
import { StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

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
        name: 'Safe Area and item lists',
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

    drawElement = (l, i) => {
        return <ListItem
            component={TouchableOpacity}
            onPress={() => {
                this.props.navigation.navigate(l.link)
            }}
            leftIcon={{ name: l.icon, color: theme.primary }}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
        />
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"/>
                <ScrollView>
                    <List>{introList.map(this.drawElement)}</List>
                    <List>{contentList.map(this.drawElement)}</List>
                    <List>{creditsList.map(this.drawElement)}</List>
                </ScrollView>
            </SafeAreaView>
        )
    }
}