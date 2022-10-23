// eslint-disable-next-line import/namespace
import { ActivityIndicator } from "react-native";

import { SECONDARY_COLOR } from "../../infrastructure/theme/colors";

export const Spinner = ({ color = SECONDARY_COLOR }) => {
  return <ActivityIndicator color={color} size="large" />;
};
