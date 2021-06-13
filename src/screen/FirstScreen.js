import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import colors, { dimmer } from "../config/colors";
// import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_flower_transparent.png";
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

// import * as SQLite from "expo-sqlite";
// //opening the sqlite database
// const db = SQLite.openDatabase("quester.db");

import db from "../Database";

const FirstScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.addListener("focus", () => {
      console.log("focus");
      //check on init
      //if pwd exists redirect to  authscreen
      db.transaction((tx) => {
        tx.executeSql(
          `select * from passwords;`,
          [],
          (_, { rows: { _array } }) => {
            //setPassword(_array[0])
            if (_array[0]) {
              console.log("end of transaction getting passwords");
              console.log(_array[0]);
              //alert("the pass is:" + _array[0].password);
              navigation.navigate("Login");
            } else {
              alert("No password found, please create a journal.")
            }
          },
          (_, error) => {
            console.log(error);
          }
        );
      });
    });
  }, [navigation]);

  handleCreatePress = () => {
    console.log("create pressed");
    //hash password
    JSHash(password, CONSTANTS.HashAlgorithms.sha256)
      .then((hash) => {
        console.log(hash);
        //save hash in database
        db.transaction((tx) => {
          tx.executeSql(
            `insert into passwords (password) values ( ? );`,
            [hash],
            (_, { rows: { _array } }) => {
              console.log("pass should be inserted as " + hash);
              navigation.navigate("Entries");
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
          onPress={() => handleCreatePress()}
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
