import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "./src/screen/AuthScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import colors from "./src/config/colors";
import EntriesScreen from "./src/screen/EntriesScreen";
import EntryScreen from "./src/screen/EntryScreen";
import FirstScreen from "./src/screen/FirstScreen";
import ModifyScreen from "./src/screen/ModifyScreen";

//import * as SQLite from 'expo-sqlite';
import db from "./src/Database";

//opening the sqlite database
//const db = SQLite.openDatabase("quester.db");

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    background: colors.PINK,
  },
};
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // console.log("creating tables")
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'drop table questions;'
    //   );
    // });
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'drop table entries;',
    //     [],
    //  (_, response) => console.log("deletion of entries table"),
    //  (_, error) => console.log(error)

    //   );
    // }
    //  );
    console.log("boop");
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists entries (id integer primary key not null, date varchar(30), title varchar(100), entry varchar(1000));",
        [],
        (_, transaction) => console.log("success creating entries table"),
        (_, error) => console.log("error:" + error)
      );
    });
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists passwords (password varchar(65) primary key not null);",
        [],
        (_, transaction) => console.log("success creating passwords table"),
        (_, error) => console.log("error:" + error)
      );
    });
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'create table if not exists questions (id integer primary key not null, question varchar(300));'
    //   );
    // });

    // db.transaction((tx) => {
    //   tx.executeSql(
    //     `delete from passwords where password = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8';`,
    //     [],
    //     (_, { rows: { _array } }) => {
    //       //setPassword(_array[0])
    //       console.log("end of transaction deleting pass")
    //     },
    //     (_, error) => {
    //       console.log(error)
    //     }
    //   );
    // });
  }, []);

  return (
    <NavigationContainer style={styles}>
      <Stack.Navigator initialRouteName="Create" headerMode="none">
        <Stack.Screen name="Create" component={FirstScreen} />
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="Entries" component={EntriesScreen} />
        <Stack.Screen name="Entry" component={EntryScreen} />
        <Stack.Screen name="Modify" component={ModifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.PINK,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
