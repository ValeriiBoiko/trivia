import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

type TQuestionCardStylesProps = {};

const getQuestionCardStyles = ({
  colors,
  props,
}: TCreateStylesParams<TQuestionCardStylesProps>) =>
  StyleSheet.create({
    container: {
      paddingVertical: scaleHeight(16),
      paddingHorizontal: scaleWidth(18),
      backgroundColor: colors.LIGHT_20,
      borderRadius: scaleHeight(14),
      flexDirection: 'row',
      alignItems: 'center',
    },
    invalidContainer: {
      backgroundColor: colors.PRIMARY_10,
    },
    question: {
      flex: 1,
      ...Typography.body2,
      color: colors.SECONDARY_50,
      marginRight: scaleWidth(10),
    },
  });

export default getQuestionCardStyles;
