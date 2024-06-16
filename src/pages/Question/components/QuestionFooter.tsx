import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface QuestionFooterProps {
  onPressSubmit: () => void;
  onPressReset: () => void;
}

const QuestionFooter = ({onPressSubmit, onPressReset}: QuestionFooterProps) => {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={styles.submitButton} onPress={onPressSubmit}>
        <Text style={styles.text}>Submit</Text>
      </Pressable>
      <Text />
      <Pressable style={styles.button} onPress={onPressReset}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
    padding: 10,
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#004fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default QuestionFooter;
