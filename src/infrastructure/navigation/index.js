import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { AccountNavigator } from "./account.navigator";
import AppNavigator from "./app.navigator";

export const Navigator = () => {
  const { user } = useContext(UserContext);

  const MyNavigator = user ? AppNavigator : AccountNavigator;

  return <MyNavigator />;
};
