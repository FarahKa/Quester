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

  // // reset login status
  useEffect(() => {
    
    setEntries([
        { id: "1", entry: "Today I had a good day." },
        { id: "2", entry: "Today I had a good day." },
        { id: "3", entry: "Today I had a good day." },
        { id: "4", entry: "Today I had a good day." },
        { id: "5", entry: "Today I had a good day." },
        { id: "6", entry: "Today I had a good day." },
        { id: "7", entry: "Today I had a good day." },
        { id: "8", entry: "Today I had a good day." },
        { id: "9", entry: "Today I had a good day." },
        { id: "10", entry: "Today I had a good day." },
        { id: "20", entry: "Today I had a good day." },
        { id: "30", entry: "Today I had a good day." },
        { id: "40", entry: "Today I had a good day." },
        { id: "50", entry: "Today I had a good day." },
        { id: "60", entry: "Today I had a good day." },
        { id: "70", entry: "Today I had a good day." },
        { id: "80", entry: "Today I had a good day." },
        { id: "90", entry: "Today I had a good day." },
      ]);
  }, []);

  // handleLoginPress = () => {
  //   console.log("Login button pressed");

  //   setSubmitted(true);
  //   if (email && password) {
  //     dispatch(loadingActions.startLoading());
  //     dispatch(userActions.login(email, password)).then(
  //       (response) => {
  //         switch (response.role) {
  //           case "consultant":
  //             const resetAction1 = StackActions.reset({
  //               index: 0,
  //               actions: [NavigationActions.navigate({ routeName: "Home" })],
  //             });
  //             navigation.dispatch(resetAction1);
  //             break;
  //           case "trainer":
  //             const resetAction = StackActions.reset({
  //               index: 0,
  //               actions: [
  //                 NavigationActions.navigate({ routeName: "HomeTrainer" }),
  //               ],
  //             });
  //             navigation.dispatch(resetAction);
  //             break;
  //           case "jury":
  //             const resetActionJ = StackActions.reset({
  //               index: 0,
  //               actions: [
  //                 NavigationActions.navigate({ routeName: "HomeJury" }),
  //               ],
  //             });
  //             navigation.dispatch(resetActionJ);
  //             break;
  //           case "both":
  //             const resetActionB = StackActions.reset({
  //               index: 0,
  //               actions: [
  //                 NavigationActions.navigate({ routeName: "HomeBoth" }),
  //               ],
  //             });
  //             navigation.dispatch(resetActionB);
  //             break;
  //           default:
  //             console.log(response.role);
  //         }
  //         //navigation.navigate('Home');
  //       },
  //       (error) => {
  //         console.log(error);
  //         dispatch(loadingActions.stopLoading());
  //       }
  //     );
  //   }

  //   //navigation.navigate("Home");
  // };

  return (
    <View style={[styles.contenu]}>
      <View style={styles.title}>
        <Image source={imageLogo} style={styles.littlelogo} />
        {/* <Text style={{ color: colors.WHITE }}>
          Your entries
        </Text> */}
      </View>

      <View style={styles.form}>
      <FlatList
            data={entries}
            keyExtractor={(entry) => entry.id}
            persistentScrollbar={true}
            renderItem={({item}) => {
                //console.log(item);
            return  <ButtonComponent label={item.entry} onPress={() => navigation.navigate('Entries')} />

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
