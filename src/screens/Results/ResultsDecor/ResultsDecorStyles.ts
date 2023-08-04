import {StyleSheet} from 'react-native';
import {scaleWidth} from '@theme/layout';

const getResultsDecorStyles = () =>
  StyleSheet.create({
    topLeftDecor: {
      position: 'absolute',
      left: 0,
      top: '15%',
      aspectRatio: 0.16,
      width: scaleWidth(18),
    },
    topRightDecor: {
      position: 'absolute',
      right: 0,
      aspectRatio: 0.62,
      width: scaleWidth(50),
    },
    bottomLeftDecor: {
      position: 'absolute',
      left: 0,
      top: '50%',
      aspectRatio: 0.515,
      width: scaleWidth(110),
    },
    bottomRightDecor: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      aspectRatio: 1.176,
      width: scaleWidth(55),
    },
    middleRightOneDecor: {
      position: 'absolute',
      right: 0,
      top: '17%',
      aspectRatio: 0.213,
      width: scaleWidth(90),
    },
    middleRightTwoDecor: {
      position: 'absolute',
      right: 0,
      top: '82%',
      aspectRatio: 0.257,
      width: scaleWidth(15),
    },
  });

export default getResultsDecorStyles;
