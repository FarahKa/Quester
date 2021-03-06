import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import colors from "../config/colors";

// We support all the TextInput props


const FormTextInput = ({ term, onTermChange, onTermSubmit, placeholder, additionalStyle, ...otherProps }) =>  {

  
    return (
      <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      value={term}
      onChangeText={(newTerm) => onTermChange(newTerm)}
      style={styles.inputStyle}
      onEndEditing={() => {
          onTermSubmit()
      }}
        style={[styles.textInput, additionalStyle]}
        {...otherProps}
      />
    );
  
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: colors.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    color: colors.DARK_GREY
  }
});

export default FormTextInput;