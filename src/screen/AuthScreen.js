import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, KeyboardAvoidingView } from "react-native";
import colors, { dimmer } from "../config/colors";
// import { useDispatch, useSelector, connect } from "react-redux";
import ButtonComponent from "../components/ButtonComponent";
import FormTextInput from "../components/FormTextInputComponent";
import imageLogo from "../../assets/quester_flower_transparent.png";
// import { userActions } from "../actions/index";
// import {
//   StackActions,
//   NavigationActions,
//   withNavigation,
//   NavigationEvents,
// } from "react-navigation";
// import ThemeComponent from "../components/ThemeComponent";
// import { loadingActions } from "../actions/loadingActions";

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // // reset login status
  // useEffect(() => {
  //   dispatch(userActions.logout());
  // }, []);

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
      <KeyboardAvoidingView style={[styles.contenu]}>
        <Image source={imageLogo} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            term={email}
            onTermChange={(newTerm) => setEmail(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Email"
            keyboardType="email-address"
          />
          <FormTextInput
            term={password}
            onTermChange={(newTerm) => setPassword(newTerm)}
            onTermSubmit={() => {}}
            placeholder="Password"
            password={true}
            secureTextEntry={true}
          />
          <ButtonComponent label="Login" onPress={() => {}} />
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
