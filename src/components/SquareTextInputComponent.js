import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "../config/colors";

// We support all the TextInput props

const SquareTextInput = ({
  term,
  onTermChange,
  onTermSubmit,
  placeholder,
  additionalStyle,
  height,
  ...otherProps
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      value={term}
      onChangeText={(newTerm) => onTermChange(newTerm)}
      style={styles.inputStyle}
      onEndEditing={() => {
        onTermSubmit();
      }}
      style={[styles.textInput, additionalStyle]}
      {...otherProps}
      multiline={true}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    //height: 40,
    borderColor: colors.WHITE,
    //borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    color: colors.DARK_GREY,
    backgroundColor : colors.DARKER_PINK,
    padding: 8,
  },
});

export default SquareTextInput;
