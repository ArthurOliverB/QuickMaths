/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import Game from './src/screens/Game';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={styles.containter}>
		  <Game></Game>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  containter: {
	marginTop: 50,
	flex: 1,
    alignItems: 'center',
	justifyContent: 'flex-start',
  },
});

export default App;
