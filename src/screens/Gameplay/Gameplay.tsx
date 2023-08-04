import React, {FC, useCallback, useState} from 'react';
import {Routes} from '@navigation/routes';
import {THomeNavigatorScreens} from '@navigation/HomeNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LayoutAnimation, Text, TouchableOpacity, View} from 'react-native';
import useStyles from '@hooks/useStyles';
import getGameplayStyles from './GameplayStyles';
import Button from '@components/Button';
import Screen from '@components/Screen';
import {scaleFontSize} from '@theme/layout';
import {useAppSelector} from '@hooks/useAppSelector';
import {
  answerQuestion,
  clearQuestions,
  selectAllQuestions,
} from '@store/quizSlice';
import {useAppDispatch} from '@hooks/useAppDispatch';
import useColors from '@hooks/useColors';
import ProgressIndicator from '@components/ProgressIndicator';
import Close from '@assets/icons/close.svg';
import GameplayDecor from './GameplayDecor';

type TGameplayProps = NativeStackScreenProps<
  THomeNavigatorScreens,
  Routes.HOME_GAMEPLAY
>;

const Gameplay: FC<TGameplayProps> = ({navigation}) => {
  const colors = useColors();
  const dispatch = useAppDispatch();
  const styles = useStyles(getGameplayStyles);
  const questions = useAppSelector(state => selectAllQuestions(state.quiz));
  const [currentIndex, setCurrentIndex] = useState(0);

  const question = questions[currentIndex];

  const setQuestionAnswer = useCallback(
    (answer: boolean) => {
      dispatch(answerQuestion({id: questions[currentIndex].id, answer}));

      if (currentIndex === questions.length - 1) {
        navigation.navigate(Routes.HOME_RESULTS);
      } else {
        LayoutAnimation.configureNext({
          duration: 250,
          update: {
            type: 'easeIn',
          },
        });
        setCurrentIndex(number => number + 1);
      }
    },
    [answerQuestion, questions, currentIndex, dispatch, navigation],
  );

  const onPressTruthyAnswer = useCallback(() => {
    setQuestionAnswer(true);
  }, [setQuestionAnswer]);

  const onPressFalsyAnswer = useCallback(() => {
    setQuestionAnswer(false);
  }, [setQuestionAnswer]);

  const onPressExit = useCallback(() => {
    navigation.goBack();

    dispatch(clearQuestions());
  }, [dispatch, navigation, clearQuestions]);

  return (
    <Screen contentContainerStyle={styles.contentContainerStyle}>
      <GameplayDecor />

      <View style={styles.exitButtonContainer}>
        <TouchableOpacity hitSlop={15} onPress={onPressExit}>
          <Close
            width={scaleFontSize(15)}
            height={scaleFontSize(15)}
            color={colors.SECONDARY_40}
          />
        </TouchableOpacity>
      </View>

      {question && (
        <>
          <View style={styles.header}>
            <Text style={styles.title}>{question.category}</Text>
            <Text style={styles.levelLabel}>level 1</Text>
          </View>

          <ProgressIndicator
            value={currentIndex + 1}
            maxValue={questions.length}
          />

          <Text style={styles.question}>{question.question}</Text>

          <Button
            title={'TRUE'}
            type={'secondary'}
            style={styles.button}
            onPress={onPressTruthyAnswer}
          />
          <Button
            title={'FALSE'}
            type={'secondary'}
            variant={'outlined'}
            style={styles.button}
            onPress={onPressFalsyAnswer}
          />
        </>
      )}
    </Screen>
  );
};

export default Gameplay;
