import useStyles from '@hooks/useStyles';
import React, {FC} from 'react';
import {Text, View, ViewProps} from 'react-native';
import getQuestionCardStyles from './QuestionCardStyles';
import useColors from '@hooks/useColors';
import Check from '@assets/icons/check.svg';
import Close from '@assets/icons/close.svg';
import {scaleFontSize} from '@theme/layout';

type TQuestionCardProps = ViewProps & {
  question: string;
  isCorrect: boolean;
};

const QuestionCard: FC<TQuestionCardProps> = ({
  isCorrect,
  question,
  style,
  ...props
}) => {
  const colors = useColors();
  const styles = useStyles(getQuestionCardStyles);

  const Icon = isCorrect ? Check : Close;

  return (
    <View
      style={[styles.container, !isCorrect && styles.invalidContainer, style]}
      {...props}>
      <Text style={styles.question}>{question}</Text>

      <Icon
        width={scaleFontSize(20)}
        height={scaleFontSize(20)}
        color={isCorrect ? colors.PRIMARY_50 : colors.SECONDARY_40}
      />
    </View>
  );
};

export default React.memo(QuestionCard);
