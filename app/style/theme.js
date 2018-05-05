import { StyleSheet } from 'react-native'

export const textColor = '#333'
export const primary = '#4A90E2'

export const text = StyleSheet.create({
    paragraph: {
        fontSize: 18,
        fontWeight: '200',
        lineHeight: 25,
        color: textColor,
        marginBottom: 20,
    },
    title: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 36,
        fontWeight: '300',
        color: textColor
    },
    link: {
        color: primary
    }
})