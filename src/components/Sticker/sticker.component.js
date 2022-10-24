/* eslint-disable import/namespace */
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD } from "../../infrastructure/theme/fonts";
import {
  addCollectedSticker,
  addDuplicateSticker,
  removeCollectedSticker,
  removeDuplicateSticker,
} from "../../services/sectionsService";
import { Spinner } from "../Spinner/spinner.component";

export const Sticker = ({ section, stickerIndex, userSectionProgress, userSectionDuplicates }) => {
  const [loading, setLoading] = useState(false);
  const { code, key, title } = section;
  const isMuseumSection = title === "FIFA MUSEUM";
  const stickerAlbumNumber = isMuseumSection ? stickerIndex + 19 : stickerIndex + 1;
  const stickerName = code ? `${code}-${stickerAlbumNumber}` : "00";

  const userHasSticker = userSectionProgress.includes(stickerName);
  const isDuplicateSticker = userSectionDuplicates.includes(stickerName);

  const { updateUserStickers, updateUserDuplicates } = useContext(UserContext);

  const handleAddSticker = () => {
    setLoading(true);

    addCollectedSticker(key, stickerName)
      .then((response) => {
        const { stickers } = response.data.body;

        updateUserStickers(stickers);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRemoveSticker = () => {
    setLoading(true);

    removeCollectedSticker(key, stickerName)
      .then((response) => {
        const { stickers } = response.data.body;

        updateUserStickers(stickers);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleAddDuplicate = () => {
    setLoading(true);

    addDuplicateSticker(key, stickerName)
      .then((response) => {
        const { duplicates } = response.data.body;

        updateUserDuplicates(duplicates);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRemoveDuplicate = () => {
    setLoading(true);

    removeDuplicateSticker(key, stickerName)
      .then((response) => {
        const { duplicates } = response.data.body;

        updateUserDuplicates(duplicates);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View
      style={
        isDuplicateSticker
          ? styles.duplicateSticker
          : userHasSticker
          ? styles.collectedSticker
          : styles.sticker
      }
    >
      {loading ? (
        <Spinner color={userHasSticker ? WHITE : SECONDARY_COLOR} />
      ) : (
        <>
          <View
            style={
              userHasSticker && !isDuplicateSticker
                ? styles.buttonsContainer
                : styles.singleButtonContainer
            }
          >
            {isDuplicateSticker ? (
              <TouchableOpacity onPress={handleRemoveDuplicate}>
                <Ionicons name="md-trash" color={WHITE} size={25} />
              </TouchableOpacity>
            ) : userHasSticker ? (
              <>
                <TouchableOpacity onPress={handleRemoveSticker}>
                  <Ionicons name="md-trash" color={WHITE} size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAddDuplicate}>
                  <Ionicons name="md-copy" color={WHITE} size={25} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity onPress={handleAddSticker}>
                <Ionicons name="md-add" color={WHITE} size={25} />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.stickerTitle}>{stickerName}</Text>
        </>
      )}
    </View>
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
    borderRadius: 8,
    position: "relative",
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
    borderRadius: 8,
    position: "relative",
  },
  duplicateSticker: {
    borderColor: "#22c1dd",
    backgroundColor: "#22c1dd",
    borderWidth: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 105,
    marginBottom: 10,
    padding: 2,
    borderRadius: 8,
    position: "relative",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    width: 105,
    position: "absolute",
    left: 23.5,
    top: 5,
  },
  singleButtonContainer: {
    display: "flex",
    flexDirection: "row",
    width: 105,
    position: "absolute",
    left: 35,
    top: 5,
  },
  stickerTitle: {
    fontSize: 23,
    fontFamily: QATAR_BOLD,
    color: WHITE,
  },
});
