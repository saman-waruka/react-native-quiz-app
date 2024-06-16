import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const QuestionHeader = ({navigation}) => {
  return (
    <View>
      <View style={styles.header}>
        <Button
          title="LeaderBoard"
          onPress={() => navigation.navigate('LeaderBoard')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'flex-end',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    marginRight: 10,
  },
});

export default QuestionHeader;
