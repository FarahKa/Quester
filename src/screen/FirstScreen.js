import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView, Text } from "react-native";
import colors, { dimmer } from "../config/colors";
// import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_flower_transparent.png";
import * as SecureStore from 'expo-secure-store';
import { CONSTANTS, JSHash } from "react-native-hash";
// import { userActions } from "../actions/index";
// import {
//   StackActions,
//   NavigationActions,
//   withNavigation,
//   NavigationEvents,
// } from "react-navigation";
// import ThemeComponent from "../components/ThemeComponent";
// import { loadingActions } from "../actions/loadingActions";

const FirstScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.addListener("focus", () => {
      //check on init
      //if pwd exists redirect to  authscreen
      let result = SecureStore.getItemAsync("pwd").then(
        (result) => {
          if (result) {
            alert(" Here's your value \n" + result);
            navigation.navigate("Login");
          } else {
            alert("No values stored under that key.");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }, [navigation]);

  handleCreatePress = () => {
    console.log("create pressed");
    //hash password
    JSHash("message", CONSTANTS.HashAlgorithms.sha256)
      .then((hash) => {
        console.log(hash);
        //save hash in local storage
        SecureStore.setItemAsync("pwd", hash).then((response) => {
          //reroute to entries
          navigation.navigate("Entries");
        }),
          (error) => console.log(error);
      })
      .catch((e) => console.log(e));

    //
  };

  return (
    <KeyboardAvoidingView style={[styles.contenu]}>
      <Image source={imageLogo} style={styles.logo} />
      <View style={styles.form}>
        <Text>Choose your password. Make sure you won't forget it.</Text>
        <FormTextInput
          term={password}
          onTermChange={(newTerm) => setPassword(newTerm)}
          onTermSubmit={() => {}}
          placeholder="Password"
          password={true}
          secureTextEntry={true}
        />
        <ButtonComponent
          label="Create Journal"
          onPress={() => navigation.navigate("Entries")}
        />
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

export default FirstScreen;
