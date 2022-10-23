/* eslint-disable import/namespace */
import { Alert } from "react-native";

export const ErrorAlert = ({ title, message, onPress }) => {
  const createAlert = () => {
    Alert.alert(title, message, [
      {
        text: "Accept",
        onPress,
        style: "default",
      },
    ]);
  };

  return createAlert();
};
