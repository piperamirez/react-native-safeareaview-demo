import React from 'react'
import { Text, View, Image, Button } from 'react-native'

import * as theme from '../style/theme'

export default class ScrollContent extends React.Component {
    render() {
        return (
            <View>
                <Text style={theme.text.title}>Scroll to the bottom!</Text>
                <Text style={theme.text.paragraph}>
                    Scroll down below the Lorem Ipsum text and see how Scrolling
                    behaves with this solution.
                </Text>
                <Button title='Go back' onPress={() => { this.props.navigation.pop() }} />
                <Text style={[ theme.text.paragraph, theme.text.muted, { marginTop: 20 } ]}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla lectus tellus, faucibus sed ex at, placerat vehicula
                    mi. Vivamus ut arcu quam. Vivamus ut eleifend quam.
                    Suspendisse varius nulla ut tempor posuere. Suspendisse
                    potenti. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Pellentesque
                    habitant morbi tristique senectus et netus et malesuada
                    fames ac turpis egestas. Nam ornare nisl vel odio gravida,
                    in rutrum eros scelerisque.
                </Text>
                <Text style={[ theme.text.paragraph, theme.text.muted ]}>
                    Morbi non est sed eros maximus tempor. Donec congue et lacus
                    vitae euismod. Donec molestie ligula feugiat scelerisque
                    dignissim. Vestibulum at suscipit sem, non elementum turpis.
                    Nullam commodo commodo ullamcorper. Quisque nec purus
                    scelerisque, tristique ipsum in, volutpat eros. Vivamus eu
                    eros quis sapien bibendum suscipit at eu quam. Sed ex ex,
                    facilisis sed massa a, elementum ornare lectus. Nullam tempor
                    nulla et viverra egestas. Ut pulvinar tristique ex, eget
                    congue nisi condimentum vel.
                </Text>
                <Text style={[ theme.text.paragraph, theme.text.muted ]}>
                    Sed in commodo mauris, vitae hendrerit quam. Sed sagittis
                    tellus et augue maximus elementum. Sed et nisi massa. Proin
                    posuere euismod dui, vitae scelerisque ex placerat tincidunt.
                    Phasellus porta odio eget dolor luctus, et elementum nisl
                    vehicula. Nullam nec tristique massa, non pulvinar ipsum.
                    Suspendisse eget fringilla dui. Morbi sed felis ac sapien
                    tincidunt gravida. Donec non massa dapibus, convallis quam eu,
                    bibendum eros. Suspendisse rutrum, sapien ut ornare iaculis,
                    est odio ullamcorper erat, in lobortis tellus lacus in est.
                    Pellentesque sollicitudin aliquam semper. Vestibulum vel
                    sodales ipsum, eu gravida odio. Pellentesque lorem erat,
                    rutrum sed sem in, aliquet auctor ligula.
                </Text>
                <Image resizeMode={'cover'} style={{width: 220, height: 220, borderRadius: 110, alignSelf: 'center', marginBottom: 20}} source={require('../assets/doge.jpg')}/>
                <Text style={[ theme.text.paragraph, theme.text.muted ]}>
                    Nulla at tristique nisl. Vivamus mollis magna at ex
                    efficitur, vitae commodo augue varius. Morbi molestie quam
                    congue, convallis orci nec, ullamcorper orci. Pellentesque
                    consectetur sodales massa ut vestibulum. Duis sit amet
                    mollis urna. Quisque mollis mollis sollicitudin. Nunc id
                    libero erat. Fusce blandit, nunc sit amet tincidunt
                    bibendum, libero diam blandit odio, porttitor euismod enim
                    justo eget sapien. Donec a est sagittis, varius ante ut,
                    accumsan leo. Phasellus eu ultricies massa. Fusce bibendum
                    congue sapien ac efficitur. Etiam dictum, est non commodo
                    fringilla, arcu metus suscipit enim, quis venenatis lectus
                    lectus sed ipsum. Aliquam laoreet urna venenatis massa
                    placerat, quis laoreet est lacinia.
                </Text>
                <Text style={[ theme.text.paragraph, {textAlign: 'center'} ]}>
                    How can we improve this behavior? 🤔
                </Text>
                <Text style={{color: theme.textColor, textAlign: 'center'}}>
                    ↓ This is the end of the view ↓
                </Text>
            </View>
        )
    }
}