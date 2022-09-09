import React, { forwardRef } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles, {
  TextInput as StyledTextInput,
  InputLabel,
  InputHelperText,
  TextInputContainer,
} from './styles';
import Tooltip from 'rn-tooltip';

const TextInput = (props, ref) => {
  const {
    label,
    labelStyle = {},
    helperText,
    helperTextStyle = {},
    inputStyle = {},
    containerStyle = {},
    errorMessage = '',
    shouldHighlightErrorContainer = true,
    leftIcon,
    onLeftIconPress = () => undefined,
    rightIcon,
    onRightIconPress = () => undefined,
    rightLabel,
    isRequired = false,
    info,
    infoIcon,
    closeIcon,
    ...inputProps
  } = props;

  const Label = () => {
    return label && rightLabel ? (
      <View style={styles.dualLabelContainer}>
        <InputLabel style={labelStyle}>{label}</InputLabel>
        {rightLabel}
      </View>
    ) : label ? (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <InputLabel style={labelStyle}>{label}</InputLabel>
        </View>
        {info ? (
          <Tooltip
            withOverlay={false}
            withPointer={false}
            containerStyle={styles.tooltip}
            popover={
              <View style={styles.tooltipContainer}>
                <View style={styles.tooltipContent}>
                  <Text style={styles.tooltipHeader}>{label}</Text>
                  <Text style={styles.tooltipText}>{info}</Text>
                </View>
                <Image source={closeIcon} style={styles.tooltipClose} resizeMode="contain" />
              </View>
            }>
            <Image source={infoIcon} style={styles.info} />
          </Tooltip>
        ) : null}
      </View>
    ) : null;
  };

  const containerStyles =
    errorMessage && shouldHighlightErrorContainer
      ? {
        backgroundColor: '#FFF3F6',
        borderWidth: 1,
        borderColor: '#FE84A8',
      }
      : {};

  return (
    <View style={containerStyle}>
      {Label()}

      {helperText && <InputHelperText style={helperTextStyle}>{helperText}</InputHelperText>}

      <TextInputContainer style={containerStyles}>
        {leftIcon && (
          <View style={styles.leftActionContainer}>
            <TouchableOpacity
              onPress={() => {
                onLeftIconPress();
              }}>
              {leftIcon}
            </TouchableOpacity>
          </View>
        )}
        <StyledTextInput ref={ref} style={[inputStyle]} {...inputProps} placeholderTextColor={'#99A9AC'} />
        {rightIcon && (
          <View style={styles.rightActionContainer}>
            <TouchableOpacity
              onPress={() => {
                onRightIconPress();
              }}>
              {rightIcon}
            </TouchableOpacity>
          </View>
        )}
      </TextInputContainer>

      {errorMessage ? (
        <InputLabel style={[labelStyle, { color: '#CB6A86', padding: 5 }]}>{errorMessage}</InputLabel>
      ) : null}
    </View>
  );
};

export default forwardRef(TextInput);
