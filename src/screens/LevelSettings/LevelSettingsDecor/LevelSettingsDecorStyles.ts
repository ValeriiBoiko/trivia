import {StyleSheet} from 'react-native';
import {scaleWidth} from '@theme/layout';

const getLevelSettingsDecorStyles = () =>
  StyleSheet.create({
    topLeftDecor: {
      position: 'absolute',
      left: 0,
      aspectRatio: 0.125,
      width: scaleWidth(35),
    },
    topRightDecor: {
      position: 'absolute',
      right: 0,
      aspectRatio: 0.385,
      width: scaleWidth(90),
    },
    bottomLeftDecor: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      aspectRatio: 1.276,
      width: scaleWidth(100),
    },
    bottomRightDecor: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      aspectRatio: 0.141,
      width: scaleWidth(30),
    },
  });

export default getLevelSettingsDecorStyles;
