import React, {FC, useMemo} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import useStyles from '@hooks/useStyles';
import getAvatarStyles from './AvatarStyles';
import GenericAvatar from '@assets/images/avatar.svg';

type TAvatarProps = ViewProps & {
  size?: number;
};

const Avatar: FC<TAvatarProps> = ({size = 25, style, ...props}) => {
  const stylesProps = useMemo(() => ({size}), [size]);
  const styles = useStyles(getAvatarStyles, stylesProps);

  return (
    <View style={StyleSheet.compose(styles.container, style)} {...props}>
      <GenericAvatar width={'100%'} height={'100%'} />
    </View>
  );
};

export default React.memo(Avatar);
