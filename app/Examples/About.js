import React from 'react'
import { View, Text, Linking, Button } from 'react-native'

import * as theme from '../style/theme'

export default class About extends React.Component {
    static navigationOptions = { header: null }
    author = 'framirez@thoughtworks.com'
    render() {
        return (
            <View style={[ { flex: 1, justifyContent: 'center' }, theme.view.content ]}>
                <Text style={{ textAlign: 'center', fontSize: 71 }}>
                    😊
                </Text><Text style={[ { textAlign: 'center' }, theme.text.title ]}>
                    Thank you!
                </Text>
                <Text style={[ { textAlign: 'center' }, theme.text.paragraph ]}>
                    Made with ⚛️ and ❤️
                    by <Text style={theme.text.link} onPress={() => { Linking.openURL('mailto://' + this.author) }}>
                        {this.author}
                    </Text>
                </Text>
                <Text style={[ { textAlign: 'center' }, theme.text.paragraph ]}>
                    Code available in
                    in <Text style={theme.text.link} onPress={() => { Linking.openURL('https://github.com/piperamirez/react-native-safeareaview-demo') }}>
                        GitHub
                    </Text> 🙌
                </Text>
                <Button title='Go back' onPress={() => { this.props.navigation.pop() }} />
            </View>
        )
    }
}

