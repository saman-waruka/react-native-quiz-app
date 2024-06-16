import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ROUTE} from '../../constants/routes';
import {NativeStackNavigationHelpers} from 'react-native-screens/lib/typescript/native-stack/types';

export interface HomeProps {
  navigation: NativeStackNavigationHelpers;
}

const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
      <View style={styles.buttonWrapper}>
        <Button title="Quiz" onPress={() => navigation.navigate(ROUTE.Quiz)} />
        <Button
          title="Leader Board"
          onPress={() => navigation.navigate(ROUTE.LeaderBoard)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: 10,
    width: '80%',
    alignSelf: 'center',
    height: '100%',
  },
});

export default Home;
