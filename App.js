import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [myGoals, setMyGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const handleSubmitGoal = (goal) => {
    if (goal === undefined) {
        return
    }
    setMyGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal }])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setMyGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }

  const cancelAddGoalHandler = () => {
    setIsAddMode(false)
  }
  

  return (
    <View style={styles.container}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={handleSubmitGoal} visible={isAddMode} onCancel={cancelAddGoalHandler} />
      <FlatList data={myGoals} renderItem={itemData => (
       <GoalItem title ={itemData.item.value} onDelete={() => removeGoalHandler(itemData.item.key)} />
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 50
  }
  
});
