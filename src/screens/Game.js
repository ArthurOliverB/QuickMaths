import React, {useState, useEffect} from 'react';
import lodash from 'lodash';
import {View, StyleSheet, Button} from 'react-native';
import TargetTitle from '../components/TargetTitle';
import NumberButton from '../components/NumberButton';

export default function Game() {
  const [sum, setSum] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [target, setTarget] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timer, setTimer] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const [lost, setLost] = useState(0);
  const [won, setWon] = useState(-1);

  function newGame() {
    setSum(0);
    setIsGameOver(false);
    setupNumbersAndTarget();
    setupTimer();
  }

  function setupNumbersAndTarget() {
    const newRandomNumbers = generateRandomNumbers();
    const newTarget = generateTargetValue(newRandomNumbers);
    const shuffledNumbers = lodash.shuffle(newRandomNumbers);
    setTarget(newTarget);
    setRandomNumbers(shuffledNumbers);
  }

  function handleSelect(id) {
    const newRandomNumbers = [...randomNumbers].map((el) => {
      if (el.id === id) {
        el.selected = !el.selected;
      }
      return el;
    });
    const newValue = sum + randomNumbers.find((el) => el.id === id).number;
    setSum(newValue >= 0 ? newValue : 0);
    setRandomNumbers([...newRandomNumbers]);
  }

  function generateRandomNumbers() {
    return Array.from({length: 6}).map((_, index) => ({
      id: index,
      number: 1 + Math.floor(10 * Math.random()),
      selected: false,
    }));
  }

  function generateTargetValue(newRandomNumbers) {
    return newRandomNumbers
      .slice(0, 4)
      .map((el) => el.number)
      .reduce((acc, curr) => acc + curr, 0);
  }

  function setupTimer() {
    setTimer(10);
    intervalId && clearInterval(intervalId);
    const timerId = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);
    setIntervalId(timerId);
  }
  function setupLossState() {
    clearInterval(intervalId);
    setLost(lost + 1);
    alert('LOST');
    setIsGameOver(true);
  }

  function setupWonState() {
    setWon(won + 1);
    newGame();
  }

  function checkWonOrLoss() {
    if (sum === target) {
      setupWonState();
    } else if (sum > target) {
      setupLossState();
    } else if (timer === 0) {
      setupLossState();
    }
  }

  useEffect(() => {
    checkWonOrLoss();
  }, [sum, timer]);

  return (
    <View style={styles.gameContainer}>
      <View style={styles.titleWrapper}>
        <TargetTitle
          sum={sum}
          target={target}
          timer={timer}
          won={won}
          lost={lost}></TargetTitle>
      </View>
      <View style={styles.row}>
        {randomNumbers.map((el, index) => (
          <NumberButton
            key={index}
            buttonData={el}
            onSelect={handleSelect}
            shouldDisable={isGameOver}></NumberButton>
        ))}
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title={'Play Again'} onPress={newGame}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    flex: 10,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
});
