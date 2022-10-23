/* eslint-disable import/namespace */
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import { ErrorAlert } from "../../components/Alert/alert.component";
import { Spinner } from "../../components/Spinner/spinner.component";
import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";
import axiosInstance from "../../services/axiosInstance";
import { getUserDetails, userLogin } from "../../services/userService";

export const LoginView = ({ navigation }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      country: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string().required("Password is required"),
    }),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setLoading(true);

      userLogin(formValue)
        .then((response) => {
          const { token } = response.data.body;

          axiosInstance.defaults.headers.common["authorization"] = "Bearer " + token;

          getUserDetails()
            .then((userResponse) => {
              const userData = userResponse.data.body;

              setUser(userData);

              navigation.navigate("HomeMain");
              setLoading(false);
            })
            .catch((detailsError) => {
              setError(detailsError.response.data.body);
              setLoading(false);
            });
        })
        .catch((axiosError) => {
          setError(axiosError.response.data.body);
          setLoading(false);
        });
    },
  });

  return (
    <GradientContainer>
      <Text style={styles.title}>Sign in</Text>
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
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={formik.values.password}
            style={styles.input}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
        </View>

        {loading ? (
          <Spinner />
        ) : (
          <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
            <Text style={styles.textButton}>Sign in</Text>
          </TouchableOpacity>
        )}

        <View style={styles.returnLinkContainer}>
          <Text style={styles.returnLabel}>Don't have an account? </Text>
          <Text onPress={() => navigation.navigate("Register")} style={styles.returnLink}>
            Register
          </Text>
        </View>
        <View style={styles.returnLinkContainer}>
          <Text onPress={() => navigation.navigate("Main")} style={styles.returnLink}>
            Return to Home
          </Text>
        </View>
      </View>
      {error && <ErrorAlert title="Error" message={error} onPress={() => setError(null)} />}
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
});
