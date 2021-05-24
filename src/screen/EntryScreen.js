import React, { useState, useEffect } from "react";
import { Image, KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors, { dimmer } from "../config/colors";
import imageLogo from "../../assets/quester_journal_transparent_bare.png";
import { FlatList } from "react-native-gesture-handler";
import SquareTextInput from "../components/SquareTextInputComponent";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ButtonComponent from "../components/ButtonComponent";
import * as SecureStore from 'expo-secure-store';

const EntryScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [entry, setEntry] = useState("");

  // // reset login status
  useEffect(() => {
    navigation.addListener("focus", () => {
      //check on init
      //if pwd exists redirect to  authscreen
      let result = SecureStore.getItemAsync("pwd").then(
        (result) => {
          if (result) {
            alert(" Here's your value \n" + result);
          } else {
            alert("No values stored under that key.");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }, []);

  return (
    <KeyboardAvoidingView style={[styles.contenu]}>
      <View style={styles.title}>
        <Image source={imageLogo} style={styles.littlelogo} />
      </View>
      <View style={styles.form}>
        <SquareTextInput
          term={entry}
          onTermChange={(newTerm) => setEntry(newTerm)}
          onTermSubmit={() => {}}
          placeholder="Title..."
          additionalStyle={{ height: 40 }}
        />
        <SquareTextInput
          term={entry}
          onTermChange={(newTerm) => setEntry(newTerm)}
          onTermSubmit={() => {}}
          placeholder="Entry..."
          additionalStyle={{ height: 80, textAlignVertical: "top" }}
        />
        <View style={styles.question}>
          <View style={styles.question_close}>
            <Text style={{ width: "90%" }}>
              What positive thing can you say about your day?
            </Text>
            <Ionicons
              name="md-close"
              size={25}
              color={colors.DARK_GREY}
              style={{ width: "10%" }}
            />
          </View>
          <SquareTextInput
            term={entry}
            onTermChange={(newTerm) => setEntry(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Answer..."
            additionalStyle={{ height: 80, textAlignVertical: "top" }}
          />
        </View>
        <View style={styles.question}>
          <View style={styles.question_close}>
            <Text style={{ width: "90%" }}>
              Some deep question about stuff?
            </Text>
            <Ionicons
              name="md-close"
              size={25}
              color={colors.DARK_GREY}
              style={{ width: "10%" }}
            />
          </View>
          <SquareTextInput
            term={entry}
            onTermChange={(newTerm) => setEntry(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Answer..."
            additionalStyle={{ height: 80, textAlignVertical: "top" }}
          />
        </View>
        <ButtonComponent
          label="Save"
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

export default EntryScreen;
