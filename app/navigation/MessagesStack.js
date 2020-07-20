import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MessagesScreen from '../screens/Message/MessagesScreen';

const Stack = createStackNavigator();

function MessagesStack(props) {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MessagesStack;
