import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors, { dimmer } from "../config/colors";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_journal_transparent_bare.png";
import { FlatList } from "react-native-gesture-handler";

const EntriesScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [entries, setEntries] = useState([
    // { id: "1", entry: "Today I had a good day." },
    // { id: "2", entry: "Today I had a good day." },
    // { id: "3", entry: "Today I had a good day." },
    // { id: "4", entry: "Today I had a good day." },
    // { id: "5", entry: "Today I had a good day." },
    // { id: "6", entry: "Today I had a good day." },
    // { id: "7", entry: "Today I had a good day." },
    // { id: "8", entry: "Today I had a good day." },
    // { id: "9", entry: "Today I had a good day." },
  ]);

  myjson = [
    {
      id: "1",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "2",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "3",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "4",
      answers: [
        {
          id: 3,
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "5",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "6",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "7",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "8",
      answers: [
        {
          id: 3,
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "10",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "11",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "12",
      answers: [
        {
          id: "3",
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
    {
      id: "13",
      answers: [
        {
          id: 3,
          question: {
            id: "1",
            text: "How was your day?",
          },
          answer: "cv",
          date: "2020/34/67",
          modifiedAt: "...",
        },
      ],
      title: "Entry title !",
      content: "I had a good day today !",
      date: "27/06/2014",
      modifiedAt: null,
      deletedAt: null,
    },
  ];

  // // reset login status
  useEffect(() => {
    setEntries(myjson);
  }, []);

  return (
    <View style={[styles.contenu]}>
      <View style={styles.title}>
        <Image source={imageLogo} style={styles.littlelogo} />
        {/* <Text style={{ color: colors.WHITE }}>
          Your entries
        </Text> */}
      </View>
      <ButtonComponent
        label="+ Create an entry"
        onPress={() => navigation.navigate("Entry")}
      />
      <View style={styles.form}>
        <FlatList
          data={entries}
          keyExtractor={(entry) => entry.id}
          persistentScrollbar={true}
          renderItem={({ item }) => {
            let label = item.title + " [" + item.date + "]";
            return (
              <ButtonComponent
                label={label}
                onPress={() => navigation.navigate("Entry")}
              />
            );
          }}
        />
      </View>
    </View>
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
    justifyContent: "center",
    width: "80%",
  },
});

export default EntriesScreen;
