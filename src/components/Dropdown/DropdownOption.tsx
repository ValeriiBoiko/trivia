import useStyles from '@hooks/useStyles';
import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import getDropdownStyles from './DropdownStyles';

export type TDropdownOption = {
  id: string;
  label: string;
};

export type TDropdownItemProps = TDropdownOption &
  Omit<TouchableOpacityProps, 'onPress'> & {
    onPress: (value: TDropdownOption) => void;
  };

const DropdownOption: FC<TDropdownItemProps> = ({
  id,
  label,
  style,
  onPress,
  ...props
}) => {
  const styles = useStyles(getDropdownStyles);

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      style={StyleSheet.compose(styles.option, style)}
      onPress={() => onPress({id, label})}
      {...props}>
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(DropdownOption);
