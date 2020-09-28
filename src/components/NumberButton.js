import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumberButton = ({buttonData, onSelect, shouldDisable}) => {
  const onButtonPress = () => {
    onSelect(buttonData.id);
  };
  return (
    <TouchableOpacity
      disabled={buttonData.selected}
      onPress={onButtonPress}
      style={{padding: 10}}>
      <View style={[styles.buttonContainer, buttonData.selected && styles.disabled]}>
        <Text style={[styles.label, buttonData.selected && styles.disabledText]}>
          {buttonData.number}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: 'white',
  },
  label: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  active: {
    color: 'green',
  },
  disabled: {
    backgroundColor: '#EBEBEB',
  },
  disabledText: {
    color: '#CCCCCC',
  },
});
export default NumberButton;
