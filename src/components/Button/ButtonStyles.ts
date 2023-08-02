import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

type TButtonStylesProps = {
  type: 'primary' | 'secondary';
  variant: 'solid' | 'outlined';
};

const getButtonStyles = ({
  colors,
  props: {type, variant},
}: TCreateStylesParams<TButtonStylesProps>) => {
  const isSolid = variant === 'solid';

  const buttonColors = {
    primary: colors.PRIMARY_70,
    secondary: colors.SECONDARY_40,
  };

  const shadowColors = {
    primary: colors.PRIMARY_80,
    secondary: colors.SECONDARY_60,
  };

  const titleColors = {
    solid: colors.LIGHT_10,
    outlined: buttonColors[type],
  };

  return StyleSheet.create({
    handler: {
      borderRadius: scaleWidth(14),
      height: scaleHeight(64, 0.5),
      marginBottom: isSolid ? scaleHeight(4, 0.5) : 0,
    },
    outlinedHandler: {
      borderWidth: isSolid ? 0 : scaleHeight(2, 0.5),
      borderColor: buttonColors[type],
    },
    handlerPressed: {
      marginBottom: 0,
      marginTop: isSolid ? scaleHeight(4, 0.5) : 0,
    },
    contentContainer: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scaleWidth(14),
    },

    title: {
      ...Typography.button,
      color: titleColors[variant],
    },

    shadow: {
      position: 'absolute',
      backgroundColor: shadowColors[type],
      borderRadius: scaleWidth(14),
      top: scaleHeight(4, 0.5),
      height: scaleHeight(64, 0.5),
      width: '100%',
    },
  });
};

export default getButtonStyles;
