import React from 'react'
import { StatusBar, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

import * as theme from '../style/theme'

const introList = [
    {
        name: 'What is the Safe Area?',
        subtitle: 'An introduction',
        icon: 'help-outline'
    }
]

const contentList = [
    {
        name: 'Safe Area and nav/tab bars',
        icon: 'navigation',
        subtitle: 'Navigation elements should be touchable',
    },
    {
        name: 'Safe Area and item lists',
        subtitle: 'Visible yet not touchable',
        icon: 'list'
    },
    {
        name: 'Drawing outside the Safe Area',
        icon: 'crop-free',
        subtitle: 'Sometimes we need to'
    },
]

drawElement = (l, i) => {
    return <ListItem
        component={TouchableOpacity}
        onPress={() => {
            console.log(this.props);
            this.props.navigation.navigate('SimpleExample')
        }}
        leftIcon={{ name: l.icon, color: theme.primary }}
        key={i}
        title={l.name}
        subtitle={l.subtitle}
    />
}

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Safe Area Examples 🍎'
    }
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"/>
                <ScrollView>
                    <List>{introList.map(drawElement)}</List>
                    <List>{contentList.map(drawElement)}</List>
                </ScrollView>
            </SafeAreaView>
        )
    }
}