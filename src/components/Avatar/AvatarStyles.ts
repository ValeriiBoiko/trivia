import {TCreateStylesParams} from '@hooks/useStyles';
import {StyleSheet} from 'react-native';

type TAvatarStylesProps = {
  size: number;
};

const getAvatarStyles = ({
  colors,
  props,
}: TCreateStylesParams<TAvatarStylesProps>) =>
  StyleSheet.create({
    container: {
      aspectRatio: 1,
      width: props.size,
      borderRadius: props.size,
      backgroundColor: colors.LIGHT_10,
      overflow: 'hidden',
    },
  });

export default getAvatarStyles;
