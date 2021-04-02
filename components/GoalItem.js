import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({ title, onDelete }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onDelete}>
            <View style={styles.listItem}><Text>{title}</Text></View>
        </TouchableOpacity>
    )
}

export default GoalItem


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'aliceblue',
        borderColor: 'green',
        borderWidth: 1
    }
});