import React, {FC, useCallback, useState} from 'react';
import {Routes} from '@navigation/routes';
import {THomeNavigatorScreens} from '@navigation/HomeNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import useStyles from '@hooks/useStyles';
import getLevelSettingStyles from './LevelSettingsStyles';
import Button from '@components/Button';
import Logo from '@assets/images/logo.svg';
import Screen from '@components/Screen';
import TextInput from '@components/TextInput';
import FormLabel from '@components/FormLabel';
import Coin from '@assets/icons/coin.svg';
import Prize from '@assets/icons/prize.svg';
import {scaleHeight} from '@theme/layout';
import {useAppDispatch} from '@hooks/useAppDispatch';
import {getQuestions} from '@store/quizSlice/service';
import {useAppSelector} from '@hooks/useAppSelector';
import useColors from '@hooks/useColors';
import Dropdown from '@components/Dropdown';
import {TDropdownOption} from '@components/Dropdown/DropdownOption';
import LevelSettingsDecor from './LevelSettingsDecor';
import {TDifficultyLevel} from '@store/quizSlice/types';

type TLevelSettingsProps = NativeStackScreenProps<
  THomeNavigatorScreens,
  Routes.HOME_LEVEL_SETTINGS
>;

const difficultyOptions = [
  {
    id: 'easy',
    label: 'Easy',
  },
  {
    id: 'hard',
    label: 'Hard',
  },
];

const LevelSettings: FC<TLevelSettingsProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const colors = useColors();
  const styles = useStyles(getLevelSettingStyles);
  const isLoading = useAppSelector(state => state.quiz.loading === 'pending');

  const [values, setValues] = useState({
    difficulty: difficultyOptions[0],
    amount: '',
  });

  const onChangeAmount = (amount: string) => {
    setValues(values => ({
      ...values,
      amount: +amount > 10 ? '10' : amount,
    }));
  };

  const onChangeDifficulty = (value: TDropdownOption) => {
    setValues(values => ({
      ...values,
      difficulty: value,
    }));
  };

  const onStart = useCallback(() => {
    dispatch(
      getQuestions({
        amount: +values.amount || 10,
        type: 'boolean',
        difficulty: values.difficulty.id as TDifficultyLevel,
      }),
    )
      .unwrap()
      .then(() => {
        setValues({
          difficulty: difficultyOptions[0],
          amount: '',
        });
        navigation.push(Routes.HOME_GAMEPLAY);
      });
  }, [values.amount, values.difficulty.id, navigation, getQuestions]);

  const renderCoinIcon = useCallback(
    () => <Coin height={scaleHeight(25)} />,
    [],
  );

  const renderPrizeIcon = useCallback(
    () => <Prize height={scaleHeight(25)} />,
    [],
  );

  return (
    <Screen contentContainerStyle={styles.contentContainerStyle}>
      <LevelSettingsDecor />

      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Text style={styles.welcomLabel}>Welcome to the</Text>
          <Logo width={'100%'} />
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.formField}>
          <FormLabel renderIcon={renderPrizeIcon} label="Difficulty" />
          <Dropdown
            value={values.difficulty}
            options={difficultyOptions}
            onChange={onChangeDifficulty}
          />
        </View>

        <View style={styles.formField}>
          <FormLabel renderIcon={renderCoinIcon} label="Amount" />
          <TextInput
            maxLength={2}
            value={values.amount}
            placeholder={'10'}
            placeholderTextColor={colors.SECONDARY_10}
            onChangeText={onChangeAmount}
          />
        </View>
      </View>

      <View>
        <Button
          disabled={!!values.amount && +values.amount === 0}
          type="primary"
          title={isLoading ? 'Loading...' : 'TRUE'}
          onPress={onStart}
        />
      </View>
    </Screen>
  );
};

export default LevelSettings;
