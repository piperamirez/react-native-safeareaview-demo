import { StyleSheet } from 'react-native'

export const textColor = '#333'
export const primary = '#287EE3'

export const view = StyleSheet.create({
    content: {
        padding: 30
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
        marginTop: 10,
        marginBottom: 20,
        fontSize: 30,
        fontWeight: '300',
        color: textColor
    },
    link: {
        color: primary
    }
})