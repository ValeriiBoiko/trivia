import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
} from 'react-native';
import useStyles from '@hooks/useStyles';
import getScreenStyles from './ScreenStyles';

type TScreenProps = ScrollViewProps & {
  scrollable?: boolean;
};

const Screen: FC<TScreenProps> = ({
  scrollable = true,
  children,
  style,
  contentContainerStyle,
  ...props
}) => {
  const styles = useStyles(getScreenStyles);

  if (!scrollable) {
    return (
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={style}
        contentContainerStyle={StyleSheet.compose(
          styles.container,
          contentContainerStyle,
        )}
        {...props}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Screen;
