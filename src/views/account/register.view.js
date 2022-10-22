/* eslint-disable import/namespace */
import { Picker } from "@react-native-picker/picker";
import { useFormik } from "formik";
import { useContext } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import { COUNTRY_FLAGS, FlagIcon } from "../../components/FlagIcon/flagIcon.component";
import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";
import axiosInstance from "../../services/axiosInstance";
import { getUserDetails, registerUser } from "../../services/userService";

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
    onSubmit: (formValue) => {
      registerUser(formValue)
        .then((response) => {
          const { token } = response.data.body;

          axiosInstance.defaults.headers.common["authorization"] = "Bearer " + token;

          getUserDetails()
            .then((userResponse) => {
              const userData = userResponse.data.body;

              setUser(userData);

              navigation.navigate("HomeMain");
            })
            .catch((detailsError) => {
              console.log(detailsError.response.data);
            });
        })
        .catch((axiosError) => {
          console.log(axiosError.response.data);
        });
    },
  });

  const Option = Picker.Item;

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
            {selectedCountry && <FlagIcon country={selectedCountry} />}
            <Picker
              selectedValue={selectedCountry}
              style={selectedCountry ? styles.select : styles.input}
              onValueChange={(option) => formik.setFieldValue("country", option)}
            >
              {Object.keys(COUNTRY_FLAGS).map((country, i) => {
                return <Option label={country} value={country} key={i} />;
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
    fontFamily: QATAR_HEAVY,
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
