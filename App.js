import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [myGoals, setMyGoals] = useState([])

  const handleSubmitGoal = (goal) => {
    setMyGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goal }])
  }

  const removeGoalHandler = (goalId) => {
    setMyGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }
  

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleSubmitGoal} />
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
