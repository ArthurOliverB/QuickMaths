import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TargetTitle = ({target, sum, timer, won, lost}) => {
  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreTitle}>{lost}</Text>
          <Text style={styles.scoreSubtitle}>LOST</Text>
        </View>
        <Text
          style={[
            styles.title,
            {
              textAlign: 'center',
              color: sum === target ? 'green' : '#333',
              flex: 1,
            },
          ]}>
          {sum}/{target}
        </Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreTitle}>{won}</Text>
          <Text style={styles.scoreSubtitle}>WON</Text>
        </View>
      </View>
      <Text style={styles.title}>{timer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  scoreContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreTitle: {fontWeight: '300', letterSpacing: 2, fontSize: 20},
  scoreSubtitle: {fontWeight: '300', letterSpacing: 2},
});

export default TargetTitle;
