import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import colors, { dimmer } from "../config/colors";
// import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_flower_transparent.png";
import * as SecureStore from 'expo-secure-store';
import { CONSTANTS } from 'react-native-hash';

const AuthScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);



  return (
      <KeyboardAvoidingView style={[styles.contenu]}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            term={password}
            onTermChange={(newTerm) => setPassword(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Password"
            password={true}
            secureTextEntry={true}
          />
          <ButtonComponent label="Access Journal" onPress={() => navigation.navigate('Entries')} />
        </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.PINK,
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 25,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
  },
});

// const mapStateToProps = (state) => {
//   //console.log("yo");
//   const { user } = state.authentication;
//   return { user };
// };

export default AuthScreen;

//export default AuthScreen;
