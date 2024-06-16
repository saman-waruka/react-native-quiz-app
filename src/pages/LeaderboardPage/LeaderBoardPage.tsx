// components/LeaderBoard.tsx

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {leaderBoardData, UserScore} from '../../data/leaderboard';

const LeaderBoardPage = () => {
  const [scores, setScores] = useState<UserScore[]>([]);
  useEffect(() => {
    setScores(leaderBoardData);
  }, []);

  return (
    <View style={styles.container}>
      {scores.map((score, index) => (
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
});

export default LeaderBoardPage;
