import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as theme from '../style/theme'

createScreen = (title, paragraph) => {
    return class HomeTab extends React.Component {
        render() {
            return (
                <View style={[ theme.view.content, styles.view ]}>
                    <Text style={theme.text.title}>{title}</Text>
                    <Text style={theme.text.paragraph}>{paragraph}</Text>
                </View>
            )
        }
    }
}

getIcon = (icon, focused, tintColor) => {
    const iconName = `${icon}${focused ? '' : '-outline'}`
    return <Ionicons name={iconName} size={25} color={tintColor} />
}

export default createBottomTabNavigator(
    {
        Magic: {
            screen: createScreen(
                'Magic 🎩',
                'Navigation components automagically adjust to Safe Area insets.'
            )
        },
        Heart: { screen: createScreen('Heart ❤️') },
        Star: { screen: createScreen('Star ⭐️') },
        Cloud: { screen: createScreen('Cloud ☁️') }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                switch (routeName) {
                case 'Magic':
                    return getIcon('ios-color-wand', focused, tintColor)
                case 'Heart':
                    return getIcon('ios-heart', focused, tintColor)
                case 'Star':
                    return getIcon('ios-star', focused, tintColor)
                case 'Cloud':
                    return getIcon('ios-cloud', focused, tintColor)
                }
            },
        })
    }
)

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    }
})