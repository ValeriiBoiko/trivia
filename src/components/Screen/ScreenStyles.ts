import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

const getScreenStyles = ({insets}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal: scaleWidth(20),
      paddingTop: insets.top + scaleHeight(20, 0.5),
      paddingBottom: insets.bottom + scaleHeight(20, 0.5),
    },
  });

export default getScreenStyles;
