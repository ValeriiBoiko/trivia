import useStyles from '@hooks/useStyles';
import React, {FC, useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import getDropdownStyles from './DropdownStyles';
import useLayout from '@hooks/useLayout';
import usePagePosition from '@hooks/usePagePosition';
import ChevronDown from '@assets/icons/chevron-down.svg';
import useColors from '@hooks/useColors';
import {scaleFontSize, scaleHeight} from '@theme/layout';
import DropdownOption, {TDropdownOption} from './DropdownOption';

type TDropdownProps = ViewProps & {
  invalid?: boolean;
  value: TDropdownOption;
  options: TDropdownOption[];
  onChange?: (value: TDropdownOption) => void;
};

const Dropdown: FC<TDropdownProps> = ({
  value,
  options,
  style,
  onChange,
  ...props
}) => {
  const ITEM_HEIGHT = scaleHeight(54);
  const colors = useColors();
  const dropdownRef = useRef(null);
  const styles = useStyles(getDropdownStyles);

  const [layout, setLayout] = useLayout();
  const [isExpanded, setExpanded] = useState(false);
  const {x: pageX, y: pageY} = usePagePosition(dropdownRef.current);

  const floatingMenuStyles = useMemo(
    () => [
      styles.floatingContainer,
      {
        left: pageX,
        top: pageY + (layout?.height || 0),
        width: layout?.width,
        maxHeight: ITEM_HEIGHT * 3,
      },
    ],
    [pageX, pageY, layout?.height, layout?.width],
  );

  const onToggleOptions = useCallback(() => {
    setExpanded(expanded => !expanded);
  }, [setExpanded]);

  const onPressOption = useCallback(
    (value: TDropdownOption) => {
      onChange?.(value);
      onToggleOptions();
    },
    [onChange, onToggleOptions],
  );

  const renderOption: ListRenderItem<TDropdownOption> = ({
    item: {id, label},
    index,
  }) => (
    <DropdownOption
      id={id}
      style={index === options.length - 1 && styles.lastOption}
      label={label}
      onPress={onPressOption}
    />
  );

  const getOptionKey = useCallback(({id}: TDropdownOption) => id, []);

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={isExpanded}>
        <Pressable style={styles.modalWrapper} onPress={onToggleOptions}>
          <FlatList
            style={floatingMenuStyles}
            data={options}
            bounces={false}
            keyExtractor={getOptionKey}
            renderItem={renderOption}
          />
        </Pressable>
      </Modal>

      <TouchableOpacity
        ref={dropdownRef}
        activeOpacity={0.8}
        style={StyleSheet.compose(
          styles.previewContainer,
          isExpanded && styles.previewContainerExpanded,
        )}
        onLayout={setLayout}
        onPress={onToggleOptions}
        {...props}>
        <Text style={styles.activeOptionLabel}>{value.label}</Text>

        <ChevronDown
          width={scaleFontSize(15)}
          height={scaleFontSize(15)}
          color={colors.LIGHT_10}
        />
      </TouchableOpacity>
    </>
  );
};

export default React.memo(Dropdown);
