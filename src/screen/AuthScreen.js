import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import colors, { dimmer } from "../config/colors";
// import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_flower_transparent.png";
import { CONSTANTS, JSHash } from "react-native-hash";

// import * as SQLite from "expo-sqlite";
// //opening the sqlite database
// const db = SQLite.openDatabase("quester.db");
import db from "../Database";

const AuthScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");

  handleLoginPress = () => {
    console.log("login pressed");
    //hash password
    JSHash(password, CONSTANTS.HashAlgorithms.sha256)
      .then((hash) => {
        console.log("hash=" + hash);
        //check if database hash is the same as input hash
        //1 get database hash
        //2 check against it
        db.transaction((tx) => {
          tx.executeSql(
            `select * from passwords;`,
            [],
            (_, { rows: { _array } }) => {
              //setPassword(_array[0])
              if (_array[0]) {
                console.log("end of transaction getting passwords");
                console.log(_array[0]);
                console.log("checking against hash")
                if(hash == _array[0].password){
                  navigation.navigate("Entries");
                } else {
                  alert("Wrong password input. Please try again.")
                }
              } else {
                navigation.navigate("Create");
              }
            },
            (_, error) => {
              console.log(error);
            }
          );
        });
      })
      .catch((e) => console.log(e));

    //
  };

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
          <ButtonComponent label="Access Journal" onPress={() => handleLoginPress()} />
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
