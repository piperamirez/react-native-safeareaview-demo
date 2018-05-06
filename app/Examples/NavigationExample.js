import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import * as theme from '../style/theme'

createView = (text) => {
    return (
        <View style={styles.view}>
            <Text style={[ theme.text.title, { textAlign: 'center' } ]}>
                {text}
            </Text>
        </View>
    )
}

class HomeTab extends React.Component {
    render() { return createView('Home 🏠') }
}

class HeartTab extends React.Component {
    render() { return createView('Heart ❤️') }
}

class StarTab extends React.Component {
    render() { return createView('Star ⭐️') }
}

class CloudTab extends React.Component {
    render() { return createView('Cloud ☁️') }
}

getIcon = (icon, focused, tintColor) => {
    const iconName = `${icon}${focused ? '' : '-outline'}`
    return <Ionicons name={iconName} size={25} color={tintColor} />
}

export default createBottomTabNavigator(
    {
        Home: { screen: HomeTab },
        Heart: { screen: HeartTab },
        Star: { screen: StarTab },
        Cloud: { screen: CloudTab }
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                switch (routeName) {
                case 'Home':
                    return getIcon('ios-home', focused, tintColor)
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
    },
    emoji: {
        textAlign: 'center',
        fontSize: 96
    }
})