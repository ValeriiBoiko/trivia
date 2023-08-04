import {StyleSheet} from 'react-native';
import {scaleWidth} from '@theme/layout';

const getGameplayDecorStyles = () =>
  StyleSheet.create({
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

export default getGameplayDecorStyles;
