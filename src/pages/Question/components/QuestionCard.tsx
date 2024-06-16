import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Question} from '../../../data/questions';
import {shuffleArray} from '../../../utils/shuffle';

interface QuestionCardProps {
  questionIndex: number;
  questionNo: number;
  data: Question;
  onSelectAnswer: (index: number, answer: string) => void;
}

const QuestionCard = ({
  data,
  questionNo,
  questionIndex,
  onSelectAnswer,
}: QuestionCardProps) => {
  const {question, answers, selectedAnswer} = data;

  const shuffledAnswer = useMemo(() => shuffleArray(answers), [answers]);

  return (
    <View style={styles.card}>
      <Text style={styles.question}>
        {questionNo}. {question}
      </Text>
      {shuffledAnswer.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={
            selectedAnswer === answer
              ? styles.selectedAnswerButton
              : styles.answerButton
          }
          onPress={() => onSelectAnswer(questionIndex, answer)}>
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  answerButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f2f0',

    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
  selectedAnswerButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
});

export default QuestionCard;
