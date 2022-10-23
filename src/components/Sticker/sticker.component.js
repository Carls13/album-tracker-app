/* eslint-disable import/namespace */
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";

import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";
import { addCollectedSticker, removeCollectedSticker } from "../../services/sectionsService";
import { Spinner } from "../Spinner/spinner.component";

export const Sticker = ({ section, stickerIndex, userSectionProgress }) => {
  const [loading, setLoading] = useState(false);
  const { code, key, title } = section;
  const isMuseumSection = title === "FIFA MUSEUM";
  const stickerAlbumNumber = isMuseumSection ? stickerIndex + 19 : stickerIndex + 1;
  const stickerName = code ? `${code}-${stickerAlbumNumber}` : "00";

  const userHasSticker = userSectionProgress.includes(stickerName);

  const { updateUserStickers } = useContext(UserContext);

  const handlePress = () => {
    setLoading(true);
    const requestPromise = userHasSticker ? removeCollectedSticker : addCollectedSticker;

    requestPromise(key, stickerName)
      .then((response) => {
        const { stickers } = response.data.body;

        updateUserStickers(stickers);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={userHasSticker ? styles.collectedSticker : styles.sticker}
    >
      {loading ? (
        <Spinner color={userHasSticker ? WHITE : SECONDARY_COLOR} />
      ) : (
        <Text style={styles.stickerTitle}>{stickerName}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sticker: {
    borderColor: WHITE,
    borderWidth: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 105,
    marginBottom: 10,
    padding: 2,
  },
  collectedSticker: {
    borderColor: SECONDARY_COLOR,
    backgroundColor: SECONDARY_COLOR,
    borderWidth: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 105,
    marginBottom: 10,
    padding: 2,
  },
  stickerTitle: {
    fontSize: 23,
    fontFamily: QATAR_BOLD,
    color: WHITE,
  },
});
