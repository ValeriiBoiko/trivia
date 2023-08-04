import useStyles from '@hooks/useStyles';
import React, {FC} from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';
import getFormLabelStyles from './FormLabelStyles';

type TFormLabelProps = ViewProps & {
  label?: string;
  renderIcon?: () => React.ReactNode;
};

const FormLabel: FC<TFormLabelProps> = ({renderIcon, style, label = ''}) => {
  const styles = useStyles(getFormLabelStyles);

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      {renderIcon?.()}
      <Text
        style={StyleSheet.compose(
          styles.label,
          !!renderIcon && styles.labelWithIcon,
        )}>
        {label}
      </Text>
    </View>
  );
};

export default React.memo(FormLabel);
