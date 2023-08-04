import useStyles from '@hooks/useStyles';
import React, {ForwardRefRenderFunction, useMemo} from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import getTextInputStyles from './TextInputStyles';

type TTextInputProps = TextInputProps & {
  invalid?: boolean;
};

const TextInput: ForwardRefRenderFunction<RNTextInput, TTextInputProps> = (
  {style, invalid, ...props},
  forwardedRef,
) => {
  const stylesProps = useMemo(() => ({}), []);
  const styles = useStyles(getTextInputStyles, stylesProps);

  return (
    <RNTextInput
      ref={forwardedRef}
      style={[styles.input, invalid && styles.invalidInput, style]}
      {...props}
    />
  );
};

export default React.memo(React.forwardRef(TextInput));
