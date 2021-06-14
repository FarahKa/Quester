import React, { useState, useEffect, useRef } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView, Text, Button, Platform  } from "react-native";
import colors, { dimmer } from "../config/colors";
// import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_flower_transparent.png";
import { CONSTANTS, JSHash } from "react-native-hash";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
// import * as SQLite from "expo-sqlite";
// //opening the sqlite database
// const db = SQLite.openDatabase("quester.db");
import db from "../Database";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const AuthScreen = ({ navigation }) => {




  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/notifications
  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Quester wants to talk!",
      body: "Don't forget to write today...",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);





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
          <ButtonComponent label="Push" onPress={async () => {
          await sendPushNotification(expoPushToken);
        }} />
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
