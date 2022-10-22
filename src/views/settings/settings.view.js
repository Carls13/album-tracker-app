/* eslint-disable import/namespace */
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR } from "../../infrastructure/theme/colors";
import { QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const SettingsView = ({ navigation }) => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);

    navigation.navigate("Main");
  };

  return (
    <GradientContainer>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.textButton}>Logout</Text>
      </TouchableOpacity>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
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
});
