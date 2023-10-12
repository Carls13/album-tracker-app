/* eslint-disable import/namespace */
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FlagIcon } from "../../components/FlagIcon/flagIcon.component";
import { QatarLogo } from "../../components/QatarLogo/qatarLogo.component";
import { SectionsContext } from "../../contexts/SectionsContext";
import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD, QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const HomeView = () => {
  const { user, userProgress, totalDuplicates } = useContext(UserContext);
  const { totalStickers } = useContext(SectionsContext);

  const porcentage = (userProgress / totalStickers) * 100;

  return (
    <GradientContainer>
      <QatarLogo />
      <View style={styles.container}>
        <Text style={styles.label}>Welcome, </Text>
        <Text style={styles.name}>{user.username}</Text>
      </View>
      <View style={{ ...styles.container, marginBottom: 25 }}>
        <FlagIcon country={user.country} />
        <Text style={styles.country}>{user.country}</Text>
      </View>
      <Text style={styles.porcentage}>{porcentage.toFixed(2)}%</Text>
      <View style={styles.container}>
        <Text style={styles.label}>Progress: {userProgress}</Text>
        <Text style={styles.name}>/{totalStickers}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Pending: {totalStickers - userProgress}</Text>
        <Text style={styles.name}>/{totalStickers}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Duplicates: </Text>
        <Text style={styles.name}>{totalDuplicates}</Text>
      </View>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  porcentage: {
    fontSize: 48,
    fontFamily: QATAR_BOLD,
    color: WHITE,
    margin: 0,
  },
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
