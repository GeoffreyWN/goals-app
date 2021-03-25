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
  

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={handleSubmitGoal} />
      <FlatList data={myGoals} renderItem={itemData => (
       <GoalItem title ={itemData.item.value}/>
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
