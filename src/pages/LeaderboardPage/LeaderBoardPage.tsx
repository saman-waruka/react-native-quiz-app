// components/LeaderBoard.tsx

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../../redux/hook';
import {selectUserScores} from '../../redux/userScoreSlice';

const LeaderBoardPage = () => {
  const userScores = useAppSelector(selectUserScores);

  console.log('userScores ', userScores);

  if (userScores.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No data found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userScores.map((score, index) => (
        <View key={index} style={styles.scoreItem}>
          <Text style={styles.name}>{score.name}</Text>
          <Text style={styles.score}>{score.score}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  scoreItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  name: {
    fontSize: 18,
  },
  score: {
    fontSize: 18,
  },
  nameHighlight: {},
});

export default LeaderBoardPage;
