import { } from 'react-native';
import React from 'react';
import StackNavigator from './navigation/stack';
import { NavigationContainer } from '@react-navigation/native';






const App = () => {
  return (

    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
};

export default App;