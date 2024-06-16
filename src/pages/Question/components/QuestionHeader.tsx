import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {ROUTE} from '../../../constants/routes';
import {NativeStackNavigationHelpers} from 'react-native-screens/lib/typescript/native-stack/types';

export interface QuestionHeaderProps {
  name: string;
  navigation: NativeStackNavigationHelpers;
}

const QuestionHeader = ({navigation, name}: QuestionHeaderProps) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.header}>
          <Button
            title="LeaderBoard"
            onPress={() => navigation.navigate(ROUTE.LeaderBoard)}
          />
        </View>
      </View>
      <Text style={styles.headerContainer}>
        Note: Pull down to re shuffle question.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  header: {
    alignSelf: 'flex-end',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  nameText: {
    fontWeight: '700',
  },
});

export default QuestionHeader;
