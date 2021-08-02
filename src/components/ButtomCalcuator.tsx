import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  colorButton?: string;
  broad?: boolean;
  action: (textNumber: string) => void;
}

export const ButtomCalcuator = ({
  text,
  colorButton = '#2D2D2D',
  broad = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.buttom,
          backgroundColor: colorButton,
          width: broad ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButtom,
            color: colorButton === '#9B9B9B' ? '#000000' : '#FFFFFF',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttom: {
    height: 80,
    width: 80,
    backgroundColor: '#9B9B9B',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textButtom: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#000000',
    fontWeight: '300',
  },
});
