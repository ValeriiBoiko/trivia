import React, {FC, useCallback, useMemo} from 'react';
import {Routes} from '@navigation/routes';
import {THomeNavigatorScreens} from '@navigation/HomeNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useStyles from '@hooks/useStyles';
import getResultsStyles from './ResultsStyles';
import Button from '@components/Button';
import Screen from '@components/Screen';
import {scaleFontSize, scaleHeight} from '@theme/layout';
import {useAppSelector} from '@hooks/useAppSelector';
import {clearQuestions, selectAllQuestions} from '@store/quizSlice';
import {useAppDispatch} from '@hooks/useAppDispatch';
import useColors from '@hooks/useColors';
import Close from '@assets/icons/close.svg';
import QuestionCard from '@components/QuestionCard';
import {TQuizQuestion} from '@store/quizSlice/types';
import Avatar from '@components/Avatar';
import StarredStatistic from '@components/StarredStatistic';
import ResultsDecor from './ResultsDecor';

type TResultsProps = NativeStackScreenProps<
  THomeNavigatorScreens,
  Routes.HOME_RESULTS
>;

const Results: FC<TResultsProps> = ({navigation}) => {
  const colors = useColors();
  const dispatch = useAppDispatch();
  const styles = useStyles(getResultsStyles);
  const questions = useAppSelector(state => selectAllQuestions(state.quiz));
  const statistic = useMemo(
    () =>
      questions.map(
        ({userAnswer, correctAnswer}) => correctAnswer === userAnswer,
      ),
    [questions],
  );

  const score = useMemo(
    () => statistic.filter(correct => correct).length,
    [statistic],
  );

  const onPlayAgain = useCallback(() => {
    navigation.popToTop();

    dispatch(clearQuestions());
  }, [dispatch, navigation, clearQuestions]);

  const renderQuestion: ListRenderItem<TQuizQuestion> = useCallback(
    ({item}) => (
      <QuestionCard
        question={item.question}
        isCorrect={item.userAnswer === item.correctAnswer}
        style={styles.qustionCard}
      />
    ),
    [],
  );

  const getQuestionKey = useCallback(
    ({id}: TQuizQuestion) => id.toString(),
    [],
  );

  return (
    <Screen scrollable={false} style={styles.screen}>
      <ResultsDecor />

      <View style={styles.header}>
        <View style={styles.scoreCounterWrapper}>
          <Avatar size={scaleHeight(35)} />
          <Text style={styles.screenTitle}>You scored</Text>
          <View style={styles.scoreCounter}>
            <Text style={styles.scoreCounterValue}>{score}</Text>
            <Text style={styles.scoreCounterTotal}>/ {questions.length}</Text>
          </View>
        </View>

        <StarredStatistic value={statistic} style={styles.starredStatistic} />

        <TouchableOpacity
          hitSlop={15}
          style={styles.closeButton}
          onPress={onPlayAgain}>
          <Close
            width={scaleFontSize(15)}
            height={scaleFontSize(15)}
            color={colors.LIGHT_10}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={questions}
        style={styles.list}
        keyExtractor={getQuestionKey}
        showsVerticalScrollIndicator={false}
        renderItem={renderQuestion}
      />

      <Button title={'PLAY AGAIN'} onPress={onPlayAgain} />
    </Screen>
  );
};

export default Results;
