import useStyles from '@hooks/useStyles';
import React, {FC, useMemo} from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import getButtonStyles from './ButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
import useColors from '@hooks/useColors';

type TButtonProps = {
  disabled?: boolean;
  title?: string;
  type?: 'primary' | 'secondary';
  variant?: 'solid' | 'outlined';
  style?: ViewStyle;
  onPress?: () => void;
};

const Button: FC<TButtonProps> = ({
  title = '',
  type = 'primary',
  variant = 'solid',
  disabled,
  style,
  onPress,
}) => {
  const colors = useColors();
  const stylesProps = useMemo(
    () => ({
      type,
      variant,
    }),
    [type, variant],
  );
  const styles = useStyles(getButtonStyles, stylesProps);

  const buttonColors = useMemo(() => {
    if (variant === 'solid') {
      if (type === 'primary') {
        return [colors.PRIMARY_30, colors.PRIMARY_70];
      } else if (type === 'secondary') {
        return [colors.SECONDARY_40, colors.SECONDARY_40];
      }
    }

    return ['transparent', 'transparent'];
  }, [variant, type, colors]);

  const gradientLocation = useMemo(
    () => ({
      start: {x: 0, y: 0},
      end: {x: 1, y: 0},
    }),
    [],
  );

  const composehandlerStyles: PressableProps['style'] = ({pressed}) => [
    styles.handler,
    variant === 'outlined' && styles.outlinedHandler,
    pressed && styles.handlerPressed,
  ];

  return (
    <View style={StyleSheet.compose(disabled && styles.disabled, style)}>
      <View style={variant === 'solid' && styles.shadow} />

      <Pressable
        disabled={disabled}
        style={composehandlerStyles}
        onPress={onPress}>
        <LinearGradient
          colors={buttonColors}
          end={gradientLocation.end}
          start={gradientLocation.start}
          style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default React.memo(Button);
