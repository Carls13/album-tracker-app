/* eslint-disable import/namespace */
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import { useContext } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

const COUNTRY_FLAGS = {
  Qatar: require("./../../../assets/flags/qatar.png"),
  Ecuador: require("./../../../assets/flags/ecuador.png"),
  Senegal: require("./../../../assets/flags/senegal.png"),
  Netherlands: require("./../../../assets/flags/netherlands.png"),
  England: require("./../../../assets/flags/england.png"),
  Iran: require("./../../../assets/flags/iran.png"),
  "United States": require("./../../../assets/flags/united-states.png"),
  Wales: require("./../../../assets/flags/wales.png"),
  Argentina: require("./../../../assets/flags/argentina.png"),
  "Saudi Arabia": require("./../../../assets/flags/saudi-arabia.png"),
  Mexico: require("./../../../assets/flags/mexico.png"),
  Poland: require("./../../../assets/flags/poland.png"),
  Australia: require("./../../../assets/flags/australia.png"),
  Denmark: require("./../../../assets/flags/denmark.png"),
  Tunisia: require("./../../../assets/flags/tunisia.png"),
  Spain: require("./../../../assets/flags/spain.png"),
  "Costa Rica": require("./../../../assets/flags/costa-rica.png"),
  Germany: require("./../../../assets/flags/germany.png"),
  Japan: require("./../../../assets/flags/japan.png"),
  Belgium: require("./../../../assets/flags/belgium.png"),
  Canada: require("./../../../assets/flags/canada.png"),
  Morocco: require("./../../../assets/flags/morocco.png"),
  Croatia: require("./../../../assets/flags/croatia.png"),
  Serbia: require("./../../../assets/flags/serbia.png"),
  Switzerland: require("./../../../assets/flags/switzerland.png"),
  Cameroon: require("./../../../assets/flags/cameroon.png"),
  Portugal: require("./../../../assets/flags/portugal.png"),
  Ghana: require("./../../../assets/flags/ghana.png"),
  Uruguay: require("./../../../assets/flags/uruguay.png"),
  "South Korea": require("./../../../assets/flags/south-korea.png"),
};

export const mapCountryToFile = (country) => {
  return COUNTRY_FLAGS[country];
};

export const RegisterView = ({ navigation }) => {
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      country: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email"),
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      country: Yup.string().required("Favorite country is required"),
    }),
    validateOnChange: false,
    handleSubmit: (formValue) => {
      console.log({ formValue });
    },
  });

  const Option = Picker.Item;

  const url = mapCountryToFile(formik.values.country);

  const selectedCountry = formik.values.country;

  return (
    <GradientContainer>
      <Text style={styles.title}>Register</Text>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={formik.values.email}
            onChangeText={(text) => formik.setFieldValue("email", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={formik.values.password}
            style={styles.input}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Favorite team</Text>
          <View style={styles.countryContainer}>
            {selectedCountry && <Image style={styles.countryFlag} source={url} />}
            <Picker
              selectedValue={selectedCountry}
              style={selectedCountry ? styles.select : styles.input}
              onValueChange={(option) => formik.setFieldValue("country", option)}
            >
              {Object.keys(COUNTRY_FLAGS).map((country, i) => {
                return <Option label={country} value={country} key={i}/>;
              })}
            </Picker>
          </View>
        </View>

        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>

        <View style={styles.returnLinkContainer}>
          <Text style={styles.returnLabel}>Already have an account? </Text>
          <Text onPress={() => navigation.navigate("Login")} style={styles.returnLink}>
            Sign in
          </Text>
        </View>
        <View style={styles.returnLinkContainer}>
          <Text onPress={() => navigation.navigate("Main")} style={styles.returnLink}>
            Return to Home
          </Text>
        </View>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: QATAR_HEAVY,
    color: SECONDARY_COLOR,
  },
  inputContainer: {
    width: 300,
    marginBottom: 10,
    alignItems: "flex-start",
  },
  label: {
    fontFamily: QATAR_HEAVY,
    color: WHITE,
    fontSize: 10,
    textAlign: "left",
  },
  input: {
    width: 300,
    backgroundColor: WHITE,
    fontFamily: QATAR_HEAVY,
    padding: 5,
    color: "black",
    height: 50,
  },
  select: {
    width: 230,
    backgroundColor: WHITE,
    fontFamily: QATAR_HEAVY,
    padding: 5,
    color: "black",
    height: 50,
    marginLeft: 20,
  },
  countryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  option: {
    fontFamily: QATAR_HEAVY,
    color: "black",
  },
  button: {
    backgroundColor: SECONDARY_COLOR,
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 4,
    marginTop: 25,
    marginBottom: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButton: {
    fontFamily: "Qatar2022-Heavy",
    color: "black",
    textAlign: "center",
  },
  returnLinkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  returnLabel: {
    color: WHITE,
    textAlign: "center",
    fontFamily: QATAR_HEAVY,
  },
  returnLink: {
    color: SECONDARY_COLOR,
    textAlign: "center",
    fontFamily: QATAR_HEAVY,
  },
  countryFlag: {
    width: 50,
    height: 50,
  },
});
