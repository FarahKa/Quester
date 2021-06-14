import React, { useState, useEffect } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors, { dimmer } from "../config/colors";
import imageLogo from "../../assets/quester_journal_transparent_bare.png";
import { FlatList } from "react-native-gesture-handler";
import SquareTextInput from "../components/SquareTextInputComponent";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ButtonComponent from "../components/ButtonComponent";
//import * as SecureStore from 'expo-secure-store';

// import * as SQLite from "expo-sqlite";
// //opening the sqlite database
// const db = SQLite.openDatabase("quester.db");
import db from "../Database";

const ModifyScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

 // const { titleRoute, entryRoute } = route.params;

  // // // reset login status
  useEffect(() => {
    console.log("hi")
    console.log()
    setTitle(route.params.title);
    setEntry(route.params.entry);
  }, []);

  handleSavePress = () => {
    console.log("save pressed");
    //hash password
    console.log("title is:" + title);
    console.log("entry is:" + entry);
    //save hash in database
    db.transaction((tx) => {
      tx.executeSql(
        `update entries set title = ?, entry = ? where id = ?;`,
        [title, entry, route.params.id],
        (_, { rows: { _array } }) => {
          //console.log("pass should be inserted as " + hash);
          console.log(_array)
          console.log("success")
          navigation.navigate("Entries");
        },
        (_, error) => {console.log(error)}
      );
    });

    //
  };

  return (
    <KeyboardAvoidingView style={[styles.contenu]}>
      <View style={styles.title}>
        <Image source={imageLogo} style={styles.littlelogo} />
      </View>
      <View style={styles.form}>
        <SquareTextInput
          term={title}
          onTermChange={(newTerm) => setTitle(newTerm)}
          onTermSubmit={() => {}}
          placeholder="Title..."
          additionalStyle={{ height: 40 }}
        />
        <SquareTextInput
          term={entry}
          onTermChange={(newTerm) => setEntry(newTerm)}
          onTermSubmit={() => {}}
          placeholder="Entry..."
          additionalStyle={{ height: 200, textAlignVertical: "top" }}
        />
        <ButtonComponent
          label="Modify"
          onPress={() => handleSavePress()}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contenu: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.PINK,
  },
  littlelogo: {
    //flex: 1,
    width: "30%",
    resizeMode: "contain",
    marginVertical: 5,
    alignSelf: "center",
    //marginHorizontal: 10,
  },
  title: {
    justifyContent: "space-around",

    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    width: "100%",
  },
  form: {
    flex: 1,
    //justifyContent: "center",
    width: "80%",
  },
  question: {
    backgroundColor: colors.DARKER_PINK,
    padding: 10,
  },
  question_close: {
    //justifyContent: "space-around",
    //alignSelf: "center",
    //alignItems: "center",
    flexDirection: "row",
    //borderRadius: 5,
    //width: "100%",
  },
});

export default ModifyScreen;
