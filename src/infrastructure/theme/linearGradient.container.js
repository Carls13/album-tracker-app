/* eslint-disable import/namespace */
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet } from "react-native";

import { PRIMARY_COLOR, PRIMARY_COLOR_VARIANT } from "../../infrastructure/theme/colors";

export const GradientContainer = ({ children }) => {
  return (
    <SafeAreaView style={styles.background}>
      <LinearGradient colors={[PRIMARY_COLOR, PRIMARY_COLOR_VARIANT]} style={styles.gradient}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
