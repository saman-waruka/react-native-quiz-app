import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LeaderBoardPage from './src/pages/LeaderBoardPage/LeaderBoardPage';
import QuestionPage from './src/pages/Question/QuestionPage';
import {ROUTE} from './src/constants/routes';
import Home from './src/pages/Home/Home';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE.HOME}
          component={Home}
          options={{title: 'QuizApp'}}
        />
        <Stack.Screen
          name={ROUTE.Quiz}
          component={QuestionPage}
          options={{title: 'Question'}}
        />
        <Stack.Screen
          name={ROUTE.LeaderBoard}
          options={{title: 'LeaderBoard'}}
          component={LeaderBoardPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
