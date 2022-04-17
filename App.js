/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import MainStack from './navigation/MainStack';
import { SafeAreaView } from 'react-native';




function App() {


  return (
  <SafeAreaView style={{flex:1}}>
    <MainStack/>
  </SafeAreaView>
  );
};


export default App;
