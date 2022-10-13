import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_BOLD, QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container"

export const MainView = ({ navigation }) => {
    return (
        <GradientContainer>
            <Text style={styles.title}>FIFA WORLD CUP QATAR 2022</Text>
            <Text style={styles.subtitle}>ALBUM TRACKER</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.button}>
                <Text style={styles.textButton}>REGISTER</Text>
            </TouchableOpacity>
        </GradientContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontFamily: QATAR_BOLD,
        color: WHITE,
        textAlign: "center",
        marginBottom: 0
    },
    subtitle: {
        fontSize: 25,
        fontFamily: QATAR_BOLD,
        color: SECONDARY_COLOR,
        textAlign: "center",
        marginBottom: 80
    },
    button: {
        backgroundColor: SECONDARY_COLOR,
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 4
    },
    textButton: {
        fontFamily: QATAR_HEAVY,
        color: "black",
        textAlign: "center"
    }
})