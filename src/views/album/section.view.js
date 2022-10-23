/* eslint-disable import/namespace */
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Sticker } from "../../components/Sticker/sticker.component";

import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const SectionView = ({ route }) => {
  const { user } = useContext(UserContext);
  const { section } = route.params;

  const { title, order, amount, code, key } = section;
  const { stickers, duplicates } = user;

  const userSectionProgress = stickers[key];

  const collected = userSectionProgress?.length;

  const sectionStickers = Array.from(Array(amount));

  return (
    <GradientContainer>
      <Text style={styles.title}>{title || "PANINI"}</Text>
      <Text style={styles.progress}>
        {collected}/{amount}
      </Text>
      <ScrollView contentContainerStyle={styles.stickersContainer} overScrollMode="always">
        {sectionStickers.map((_, i) => {
          return (
            <Sticker stickerIndex={i} section={section} userSectionProgress={userSectionProgress} />
          );
        })}
      </ScrollView>
      <Text style={styles.title}>{title}</Text>
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: QATAR_BOLD,
    color: WHITE,
    marginBottom: -25,
  },
  progress: {
    fontSize: 36,
    fontFamily: QATAR_BOLD,
    color: SECONDARY_COLOR,
  },
  stickersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
