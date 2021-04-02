import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [goal, setGoal] = useState('')

    const handleInput = (goal) => {
        setGoal(goal)
    }

    const addGoalHandler = () => {
        onAddGoal(goal)
        setGoal()
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Enter goal"
                    style={styles.input}
                    value={goal}
                    onChangeText={handleInput}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" color="green" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    buttonContainer: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: '40%',
    }
});