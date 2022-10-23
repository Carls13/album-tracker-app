/* eslint-disable import/namespace */
import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { UserContext } from "../../contexts/UserContext";
import { WHITE } from "../../infrastructure/theme/colors";
import { QATAR_HEAVY } from "../../infrastructure/theme/fonts";

export const AlbumSectionItem = ({ item, onPress }) => {
  const { user } = useContext(UserContext);

  const { stickers } = user;

  const collected = stickers[item.key]?.length;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item]}>
      <Text style={[styles.title]}>
        {item.title || "PANINI"} {collected}/{item.amount}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: WHITE,
    borderRadius: 8,
  },
  title: {
    fontFamily: QATAR_HEAVY,
    fontSize: 24,
  },
});
