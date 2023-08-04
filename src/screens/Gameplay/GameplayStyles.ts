import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

const getGameplayStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    contentContainerStyle: {
      backgroundColor: colors.LIGHT_10,
    },

    exitButtonContainer: {
      alignItems: 'flex-end',
      marginBottom: scaleHeight(50),
    },
    header: {
      alignItems: 'center',
      marginBottom: scaleHeight(25),
    },
    title: {
      ...Typography.headline1,
      textShadowRadius: 1,
      color: colors.SECONDARY_40,
      textShadowColor: colors.SECONDARY_40,
      marginBottom: scaleHeight(10),
      textAlign: 'center',
    },
    levelLabel: {
      ...Typography.body1,
      color: colors.SECONDARY_40,
      letterSpacing: Typography.body1.fontSize / 2,
    },
    question: {
      ...Typography.headline3,
      width: '80%',
      marginVertical: scaleHeight(50),
      color: colors.SECONDARY_40,
      textShadowRadius: 1,
      textShadowColor: colors.SECONDARY_40,
    },
    button: {
      marginBottom: scaleHeight(10),
    },

    topLeftDecor: {
      position: 'absolute',
      left: 0,
      aspectRatio: 0.873,
      width: scaleWidth(72),
    },
    topRightDecor: {
      position: 'absolute',
      right: 0,
      top: '10%',
      aspectRatio: 0.388,
      width: scaleWidth(33),
    },
    bottomLeftDecor: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      aspectRatio: 1.2,
      width: scaleWidth(96),
    },
    bottomRightDecor: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      aspectRatio: 0.686,
      width: scaleWidth(30),
    },
    middleRightDecor: {
      position: 'absolute',
      right: 0,
      top: '55%',
      aspectRatio: 0.193,
      width: scaleWidth(20),
    },
  });

export default getGameplayStyles;
