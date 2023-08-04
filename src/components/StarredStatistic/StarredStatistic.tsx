import React, {FC} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import useStyles from '@hooks/useStyles';
import getStarredStatisticStyles from './StarredStatisticStyles';
import {scaleWidth} from '@theme/layout';
import Star from '@assets/icons/star.svg';
import useColors from '@hooks/useColors';

type TStarredStatisticProps = ViewProps & {
  value: boolean[];
};

const StarredStatistic: FC<TStarredStatisticProps> = ({
  value,
  style,
  ...props
}) => {
  const colors = useColors();
  const styles = useStyles(getStarredStatisticStyles);

  return (
    <View style={StyleSheet.compose(styles.container, style)} {...props}>
      {value.map((isCorrect, index) => (
        <Star
          key={index}
          width={scaleWidth(22)}
          height={scaleWidth(22)}
          color={isCorrect ? colors.PRIMARY_50 : colors.SECONDARY_20}
        />
      ))}
    </View>
  );
};

export default React.memo(StarredStatistic);
