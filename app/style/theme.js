import { StyleSheet } from 'react-native'

export const textColor = '#333'
export const primary = '#287EE3'
export const mutedColor = '#999'

export const view = StyleSheet.create({
    content: {
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'white',
    }
})

export const text = StyleSheet.create({
    paragraph: {
        fontSize: 17,
        fontWeight: '200',
        lineHeight: 23,
        color: textColor,
        marginBottom: 20,
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: '300',
        color: textColor
    },
    link: {
        color: primary
    },
    muted: {
        color: mutedColor
    },
})