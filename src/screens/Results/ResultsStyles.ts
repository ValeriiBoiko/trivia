import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';
import {Font, Typography} from '@theme/typography';

const getResultsStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    screen: {
      backgroundColor: colors.SECONDARY_30,
    },
    header: {
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      right: 0,
    },
    screenTitle: {
      ...Typography.headline4,
      fontFamily: Font.SECONDARY_BOLD,
      color: colors.LIGHT_10,
      marginHorizontal: scaleWidth(12),
    },

    scoreCounterWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    scoreCounter: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    scoreCounterValue: {
      ...Typography.headline4,
      color: colors.PRIMARY_40,
    },
    scoreCounterTotal: {
      ...Typography.body2,
      color: colors.LIGHT_10,
      lineHeight: Typography.headline4.lineHeight * 0.9,
    },

    starredStatistic: {
      marginTop: scaleHeight(18),
      marginBottom: scaleHeight(20),
    },
    list: {
      flex: 1,
      marginBottom: scaleHeight(20),
    },
    qustionCard: {
      marginBottom: scaleHeight(12),
    },
  });

export default getResultsStyles;
