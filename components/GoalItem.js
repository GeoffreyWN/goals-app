import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = ({ title }) => {
    return (
        <View style={styles.listItem}><Text>{title}</Text></View>
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