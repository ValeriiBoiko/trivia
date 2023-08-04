import {Font, Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

type TButtonStylesProps = {};

const getFormLabelStyles = ({
  colors,
}: TCreateStylesParams<TButtonStylesProps>) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: scaleHeight(25),
      marginBottom: scaleHeight(10),
    },
    label: {
      ...Typography.body1,
      fontFamily: Font.PRIMARY_BOLD,
      color: colors.PRIMARY_20,
    },
    labelWithIcon: {
      marginLeft: scaleWidth(10),
    },
  });
};

export default getFormLabelStyles;
