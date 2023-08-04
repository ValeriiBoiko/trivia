import useStyles from '@hooks/useStyles';
import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, View, ViewProps, ViewStyle} from 'react-native';
import getProgresIndicatorStyles from './ProgressIndicatorStyles';

type TProgresIndicatorProps = ViewProps & {
  value: number;
  maxValue: number;
};

const ProgresIndicator: FC<TProgresIndicatorProps> = ({
  value,
  maxValue,
  style,
  ...props
}) => {
  const styles = useStyles(getProgresIndicatorStyles);

  const trackStyle = useMemo<ViewStyle>(
    () => ({
      width: `${Math.round((value / maxValue) * 100)}%`,
    }),
    [value, maxValue],
  );

  return (
    <View style={StyleSheet.compose(styles.container, style)} {...props}>
      <View style={styles.label}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.slash}>/</Text>
        <Text style={styles.maxValue}>{maxValue}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.progress, trackStyle]} />
      </View>
    </View>
  );
};

export default React.memo(ProgresIndicator);
