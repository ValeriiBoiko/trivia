import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

const getTextInputStyles = ({colors}: TCreateStylesParams) => {
  return StyleSheet.create({
    input: {
      height: scaleHeight(54),
      borderRadius: scaleWidth(10),
      borderWidth: 1,
      borderColor: colors.LIGHT_10,
      color: colors.LIGHT_10,
      paddingHorizontal: scaleWidth(18),
      ...Typography.body1,
    },
    invalidInput: {
      borderColor: colors.PRIMARY_70,
    },
  });
};

export default getTextInputStyles;
