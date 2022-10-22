/* eslint-disable import/namespace */
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FlagIcon } from "../../components/FlagIcon/flagIcon.component";
import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD, QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const HomeView = () => {
  const { user } = useContext(UserContext);

  return (
    <GradientContainer>
      <Text style={styles.title}>FIFA WORLD CUP QATAR 2022</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Welcome, </Text>
        <Text style={styles.name}>{user.username}</Text>
      </View>
      <View style={styles.container}>
        <FlagIcon country={user.country} />
        <Text style={styles.country}>{user.country}</Text>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: QATAR_BOLD,
    color: WHITE,
  },
  container: {
    width: "100%",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: WHITE,
    fontSize: 28,
    textAlign: "center",
    fontFamily: QATAR_HEAVY,
  },
  name: {
    fontSize: 28,
    color: SECONDARY_COLOR,
    textAlign: "center",
    fontFamily: QATAR_HEAVY,
  },
  country: {
    color: WHITE,
    fontSize: 24,
    textAlign: "center",
    fontFamily: QATAR_HEAVY,
    marginLeft: 10,
  },
});
