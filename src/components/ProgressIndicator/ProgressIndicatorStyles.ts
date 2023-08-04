import {Font, Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight} from '@theme/layout';

type TProgressIndicatorStylesProps = {};

const getProgressIndicatorStyles = ({
  colors,
}: TCreateStylesParams<TProgressIndicatorStylesProps>) => {
  return StyleSheet.create({
    container: {
      minHeight: scaleHeight(25),
    },
    label: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: scaleHeight(10),
    },
    value: {
      ...Typography.headline3,
      color: colors.PRIMARY_60,
      fontFamily: Font.PRIMARY_BOLD,
    },
    slash: {
      ...Typography.headline3,
      color: colors.SECONDARY_40,
      fontFamily: Font.PRIMARY_BOLD,
    },
    maxValue: {
      ...Typography.headline5,
      color: colors.SECONDARY_40,
      fontFamily: Font.PRIMARY_BOLD,
      lineHeight: Typography.headline5.lineHeight * 1.25,
    },
    track: {
      height: scaleHeight(5),
      borderRadius: scaleHeight(5),
      backgroundColor: colors.SECONDARY_10,
    },
    progress: {
      height: scaleHeight(5),
      borderRadius: scaleHeight(5),
      backgroundColor: colors.PRIMARY_60,
    },
  });
};

export default getProgressIndicatorStyles;
