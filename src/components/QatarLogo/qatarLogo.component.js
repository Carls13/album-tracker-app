// eslint-disable-next-line import/namespace
import { Image, StyleSheet } from "react-native";

export const QatarLogo = () => {
  return <Image style={styles.image} source={require("./../../../assets/qatar-logo.png")} />;
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
});
