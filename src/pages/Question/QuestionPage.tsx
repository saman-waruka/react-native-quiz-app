import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import QuestionCard from './components/QuestionCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {shuffleArray} from '../../utils/shuffle';
import {Question, questions} from '../../data/questions';
import QuestionFooter from './components/QuestionFooter';
import QuestionCardHeader from './components/QuestionHeader';
import NameInputModal from '../../components/Modal/NameInputModal';
import {NativeStackNavigationHelpers} from 'react-native-screens/lib/typescript/native-stack/types';

export interface QuestionPageProps {
  navigation: NativeStackNavigationHelpers;
}

const QuestionPage = ({navigation}: QuestionPageProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState<string>('');
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [showInputNameModal, setShowInputNameModal] = useState<boolean>(true);

  console.log(
    'shuffledQuestions \n',
    JSON.stringify(shuffledQuestions, null, 2),
  );

  const loadQuestions = useCallback(() => {
    console.debug('loadQuestion()');
    const shuffled = shuffleArray([...questions]);
    console.debug('shuffled', JSON.stringify(shuffled, null, 2));
    setShuffledQuestions(shuffled.map(data => ({...data, selectedAnswer: ''})));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setShuffledQuestions([]);
    loadQuestions();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, [loadQuestions]);

  const onReset = () => {
    loadQuestions();
    setName('');
    setShowInputNameModal(true);
  };

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleSubmit = () => {
    checkResult();
  };

  const showConfirmSubmit = () => {
    Alert.alert('Sure to submit?', 'Press Submit to check your score.', [
      {
        text: 'Submit',
        onPress: () => handleSubmit(),
        style: 'default',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const showConfirmReset = () => {
    Alert.alert('Sure to reset?', 'Press OK to reset all data.', [
      {
        text: 'OK',
        onPress: onReset,
        style: 'default',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const onSelectAnswer = useCallback(
    (questionIndex: number, selectedAnswer: string) => {
      setShuffledQuestions(prev => {
        const questionList = Array.from<Question>(prev);
        questionList[questionIndex].selectedAnswer = selectedAnswer;
        return questionList;
      });
    },
    [],
  );

  const checkResult = () => {
    const correctCount = shuffledQuestions.filter(
      qa => qa.correctAnswer === (qa.selectedAnswer as string),
    ).length;
    Alert.alert('Score!', `Your score is ${correctCount}`, [
      {
        text: 'OK',
        style: 'default',
      },
    ]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NameInputModal
        modalVisible={showInputNameModal}
        setModalVisible={setShowInputNameModal}
        setName={setName}
      />
      <FlatList
        data={shuffledQuestions}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <QuestionCard
            questionIndex={index}
            questionNo={index + 1}
            data={item}
            onSelectAnswer={onSelectAnswer}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <QuestionCardHeader navigation={navigation} name={name} />
        }
        ListFooterComponent={
          <QuestionFooter
            onPressSubmit={showConfirmSubmit}
            onPressReset={showConfirmReset}
          />
        }
      />
    </SafeAreaView>
  );
};

export default QuestionPage;
