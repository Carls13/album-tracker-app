/* eslint-disable import/namespace */
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";

export const StickersItemSection = ({ item, type }) => {
  const { user } = useContext(UserContext);

  const { title, amount, key, code } = item;
  const { stickers, duplicates } = user;

  const userSectionProgress = stickers[key];
  const userSectionDuplicates = duplicates[key];

  const sectionStickers = Array.from(Array(amount));

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.title}>{title || "PANINI"}</Text>
      <View style={styles.stickersContainer}>
        {sectionStickers.map((_, stickerIndex) => {
          const isMuseumSection = title === "FIFA MUSEUM";
          const stickerAlbumNumber = isMuseumSection ? stickerIndex + 19 : stickerIndex + 1;
          const stickerName = code ? `${code}-${stickerAlbumNumber}` : "00";

          if (
            (type === "missing" && !userSectionProgress.includes(stickerName)) ||
            (type === "collected" && userSectionProgress.includes(stickerName)) ||
            (type === "duplicates" && userSectionDuplicates.includes(stickerName))
          )
            return <Text style={styles.stickerName}>{stickerName}</Text>;

          return "";
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: 300,
  },
  title: {
    fontSize: 24,
    fontFamily: QATAR_BOLD,
    color: SECONDARY_COLOR,
  },
  stickersContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  stickerName: {
    fontSize: 16,
    fontFamily: QATAR_BOLD,
    color: WHITE,
    marginRight: 10,
  },
});
