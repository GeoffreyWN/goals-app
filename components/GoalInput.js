import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const GoalInput = ({ onAddGoal }) => {
  const [goal, setGoal] = useState('')

  const handleInput = (goal) => {
    setGoal(goal)
  }

  

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter goal"
                style={styles.input}
                value={goal}
                onChangeText={handleInput}
            />
            <Button title="ADD" onPress={onAddGoal.bind(this, goal)} />
        </View>
    )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    }
});