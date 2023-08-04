import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight} from '@theme/layout';

const getLevelSettingStyles = ({colors, insets}: TCreateStylesParams) =>
  StyleSheet.create({
    contentContainerStyle: {
      flexGrow: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom || scaleHeight(20),
      backgroundColor: colors.SECONDARY_30,
    },

    header: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    welcomLabel: {
      ...Typography.headline2,
      color: colors.LIGHT_10,
      position: 'absolute',
    },
    logoWrapper: {
      alignItems: 'center',
      width: '100%',
      aspectRatio: 1.75,
    },
    form: {
      flexGrow: 1,
    },
    formField: {
      marginBottom: scaleHeight(20),
    },
  });

export default getLevelSettingStyles;
