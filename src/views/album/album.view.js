/* eslint-disable import/namespace */
import { useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { AlbumSectionItem } from "../../components/AlbumSectionItem/albumSectionItem.component";
import { SectionsContext } from "../../contexts/SectionsContext";
import { WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const AlbumView = ({ navigation }) => {
  const { sections } = useContext(SectionsContext);

  const renderItem = ({ item }) => {
    return (
      <AlbumSectionItem
        item={item}
        onPress={() => navigation.navigate("Section", { section: item })}
      />
    );
  };

  return (
    <GradientContainer>
      <Text style={styles.title}>ALBUM</Text>

      <FlatList data={sections} renderItem={renderItem} keyExtractor={(item) => item.key} />
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: QATAR_BOLD,
    color: WHITE,
  },
});
