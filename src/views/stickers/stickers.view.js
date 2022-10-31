/* eslint-disable import/namespace */
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { StickersItemSection } from "../../components/StickersItemSection/stickersItemSection.component";
import { SectionsContext } from "../../contexts/SectionsContext";
import { WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const StickersView = ({ navigation }) => {
  const [showCollected, setShowCollected] = useState(false);
  const [showMissing, setShowMissing] = useState(false);
  const [showDuplicates, setShowDuplicates] = useState(false);

  const { sections } = useContext(SectionsContext);

  const renderCollected = ({ item }) => {
    return <StickersItemSection item={item} type="collected" />;
  };

  const renderMissing = ({ item }) => {
    return <StickersItemSection item={item} type="missing" />;
  };

  const renderDuplicates = ({ item }) => {
    return <StickersItemSection item={item} type="duplicates" />;
  };

  return (
    <GradientContainer>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>COLLECTED</Text>
        <Ionicons
          name={showCollected ? "chevron-up" : "chevron-down"}
          size={24}
          color={WHITE}
          onPress={() => setShowCollected(!showCollected)}
        />
      </View>
      {showCollected && (
        <FlatList data={sections} renderItem={renderCollected} keyExtractor={(item) => item.key} />
      )}

      <View style={styles.sectionContainer}>
        <Text style={styles.title}>MISSING</Text>
        <Ionicons
          name={showMissing ? "chevron-up" : "chevron-down"}
          size={24}
          color={WHITE}
          onPress={() => setShowMissing(!showMissing)}
        />
      </View>

      {showMissing && (
        <FlatList data={sections} renderItem={renderMissing} keyExtractor={(item) => item.key} />
      )}

      <View style={styles.sectionContainer}>
        <Text style={styles.title}>DUPLICATES</Text>
        <Ionicons
          name={showDuplicates ? "chevron-up" : "chevron-down"}
          size={24}
          color={WHITE}
          onPress={() => setShowDuplicates(!showDuplicates)}
        />
      </View>
      {showDuplicates && (
        <FlatList data={sections} renderItem={renderDuplicates} keyExtractor={(item) => item.key} />
      )}
    </GradientContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: QATAR_BOLD,
    color: WHITE,
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});
