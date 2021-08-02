import React from 'react';
import {Text, View} from 'react-native';
import {ButtomCalcuator} from '../components/ButtomCalcuator';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    numberCalculator,
    previousNumberCalculator,
    calculate,
    buildNumber,
    positiveNegative,
    deleteLastDigit,
    clean,
    add,
    subtract,
    multiply,
    divide,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumberCalculator !== '0' && (
        <Text style={styles.liteResult}>{previousNumberCalculator}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {numberCalculator}
      </Text>

      <View style={styles.row}>
        <ButtomCalcuator text="C" colorButton="#9B9B9B" action={clean} />
        <ButtomCalcuator
          text="+/-"
          colorButton="#9B9B9B"
          action={positiveNegative}
        />
        <ButtomCalcuator
          text="del"
          colorButton="#9B9B9B"
          action={deleteLastDigit}
        />
        <ButtomCalcuator text="/" colorButton="#FF9427" action={divide} />
      </View>

      <View style={styles.row}>
        <ButtomCalcuator text="7" action={buildNumber} />
        <ButtomCalcuator text="8" action={buildNumber} />
        <ButtomCalcuator text="9" action={buildNumber} />
        <ButtomCalcuator text="X" action={multiply} colorButton="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtomCalcuator text="4" action={buildNumber} />
        <ButtomCalcuator text="5" action={buildNumber} />
        <ButtomCalcuator text="6" action={buildNumber} />
        <ButtomCalcuator text="-" action={subtract} colorButton="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtomCalcuator text="1" action={buildNumber} />
        <ButtomCalcuator text="2" action={buildNumber} />
        <ButtomCalcuator text="3" action={buildNumber} />
        <ButtomCalcuator text="+" action={add} colorButton="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtomCalcuator text="0" action={buildNumber} broad />
        <ButtomCalcuator text="." action={buildNumber} />
        <ButtomCalcuator text="=" action={calculate} colorButton="#FF9427" />
      </View>
    </View>
  );
};
