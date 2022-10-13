import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import AppNavigator from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigator = () => {
    const { user } = useContext(UserContext);

    const MyNavigator =  user ? AppNavigator : AccountNavigator;

    return <MyNavigator />;
};