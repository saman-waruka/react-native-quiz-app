import React from 'react';
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface NameInputModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setName: (value: string) => void;
}

const NameInputModal = ({
  modalVisible,
  setModalVisible,
  setName,
}: NameInputModalProps) => {
  const [inputValue, setInputValue] = React.useState('');

  const onSubmit = () => {
    if (!inputValue) {
      Alert.alert('Please enter your name.');
    }
    setName?.(inputValue);
    setModalVisible(false);
  };

  if (!modalVisible) {
    return;
  }
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Your Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type here"
              onChangeText={text => setInputValue(text)}
              value={inputValue}
            />
            <Button title="Submit" onPress={onSubmit} disabled={!inputValue} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default NameInputModal;
