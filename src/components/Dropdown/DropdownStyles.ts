import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';
import {scaleHeight, scaleWidth} from '@theme/layout';

const getTextInputStyles = ({colors}: TCreateStylesParams) => {
  return StyleSheet.create({
    modalWrapper: {
      flex: 1,
    },
    floatingContainer: {
      position: 'absolute',
    },

    previewContainer: {
      height: scaleHeight(54),
      borderColor: colors.LIGHT_10,
      borderRadius: scaleHeight(10),
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scaleWidth(19),
    },
    previewContainerExpanded: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },

    option: {
      height: scaleHeight(54),
      borderBottomColor: colors.SECONDARY_40,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scaleWidth(19),
      backgroundColor: colors.LIGHT_10,
    },
    lastOption: {
      borderBottomLeftRadius: scaleHeight(10),
      borderBottomRightRadius: scaleHeight(10),
    },
    optionLabel: {
      flex: 1,
      color: colors.SECONDARY_40,
      ...Typography.body1,
    },
    activeOptionLabel: {
      flex: 1,
      color: colors.LIGHT_10,
      ...Typography.body1,
    },
  });
};

export default getTextInputStyles;
