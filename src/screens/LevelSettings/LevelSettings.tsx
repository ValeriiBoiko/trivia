import React, {FC} from 'react';
import {Routes} from '@navigation/routes';
import {THomeNavigatorScreens} from '@navigation/HomeNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TLevelSettingsProps = NativeStackScreenProps<
  THomeNavigatorScreens,
  Routes.HOME_LEVEL_SETTINGS
>;

const LevelSettings: FC<TLevelSettingsProps> = () => {
  return null;
};

export default LevelSettings;
