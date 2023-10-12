/* eslint-disable import/namespace */
import { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Sticker } from "../../components/Sticker/sticker.component";
import { SectionsContext } from "../../contexts/SectionsContext";
import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const SectionView = ({ route, navigation }) => {
  const { user } = useContext(UserContext);
  const { sections } = useContext(SectionsContext);

  const { section } = route.params;

  const { title, amount, key } = section;
  const { stickers, duplicates } = user;

  const userSectionProgress = stickers[key];
  const userSectionDuplicates = duplicates[key];

  const collected = userSectionProgress?.length;

  const sectionStickers = Array.from(Array(amount));

  const sectionKey = sections.findIndex((item) => {
    return item.key === section.key
  });

  const isFirstSection = sectionKey === 0;
  const isLastSection = sectionKey === sections.length - 1;

  const goToPrevSection = () => {
    const previousSectionIndex = sectionKey - 1;
    const previousSection = sections[previousSectionIndex]; 
    navigation.navigate("Section", { section: previousSection })
  };
  
  const goToNextSection = () => {
    const nextSectionIndex = sectionKey + 1;
    const nextSection = sections[nextSectionIndex]; 
    navigation.navigate("Section", { section: nextSection })
  };

  return (
    <GradientContainer>
      <Text style={styles.title}>{title || "PANINI"}</Text>
      <Text style={styles.progress}>
        {collected}/{amount}
      </Text>
      <ScrollView contentContainerStyle={styles.stickersContainer} overScrollMode="always">
        {sectionStickers.map((_, i) => {
          return (
            <Sticker
              stickerIndex={i}
              section={section}
              userSectionProgress={userSectionProgress}
              userSectionDuplicates={userSectionDuplicates}
            />
          );
        })}
      </ScrollView>
      <View>
        {!isFirstSection && <TouchableOpacity onPress={goToPrevSection}>
          <Text>PREVIOUS</Text>
        </TouchableOpacity>}
        <Text style={styles.title}>{title}</Text>
        {!isLastSection && <TouchableOpacity onPress={goToNextSection}>
          <Text>NEXT</Text>
        </TouchableOpacity>}
      </View>
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
