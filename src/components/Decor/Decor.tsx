import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';
import {SvgProps} from 'react-native-svg';

type TDecorProps = ViewProps & {
  decor: FC<SvgProps>;
};

const Decor: FC<TDecorProps> = ({decor, ...props}) => {
  const DecorComponent = decor;

  return (
    <View {...props}>
      <DecorComponent width={'100%'} height={'100%'} />
    </View>
  );
};

export default React.memo(Decor);
