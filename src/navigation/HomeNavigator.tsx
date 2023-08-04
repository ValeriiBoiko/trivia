import React, {useMemo} from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Routes} from './routes';
import LevelSettings from '@screens/LevelSettings';
import Gameplay from '@screens/Gameplay';

export type THomeNavigatorScreens = {
  [Routes.HOME_LEVEL_SETTINGS]: undefined;
  [Routes.HOME_GAMEPLAY]: undefined;
  [Routes.HOME_RESULTS]: undefined;
};

const Stack = createNativeStackNavigator<THomeNavigatorScreens>();

const HomeNavigator = () => {
  const screenOptions = useMemo<NativeStackNavigationOptions>(
    () => ({
      headerShown: false,
      gestureEnabled: false,
    }),
    [],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={Routes.HOME_LEVEL_SETTINGS}
        component={LevelSettings}
      />
      <Stack.Screen name={Routes.HOME_GAMEPLAY} component={Gameplay} />
      <Stack.Screen name={Routes.HOME_RESULTS} component={() => null} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
