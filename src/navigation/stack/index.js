
import React from 'react';
import Home from '../../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../../constans';
import DestinationScreen from '../../screens/Destination';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.gray10,
                },
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="DestinationScreen"
                component={DestinationScreen}
                options={{
                    title: 'Destination',
                }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
