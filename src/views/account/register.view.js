import { Picker } from "@react-native-picker/picker";
import { useContext } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import { SECONDARY_COLOR, WHITE } from "../../infrastructure/theme/colors";
import { QATAR_HEAVY } from "../../infrastructure/theme/fonts";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container"

export const RegisterView = ({ navigation }) => {
    const { setUser } = useContext(UserContext);
    
    return (
        <GradientContainer>
            <Text style={styles.title}>Register</Text>
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput placeholder="Email" style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput placeholder="Username" style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput secureTextEntry placeholder="Password" style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Favorite team</Text>
                    <Picker
                        style={styles.input}
                    >
                        <Picker.Item style={styles.option} label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>

                <TouchableOpacity onPress={() => {
                    setUser(true);
                    navigation.navigate("HomeMain");
                    }} style={styles.button}>
                    <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>

                <View style={styles.returnLinkContainer}>
                    <Text style={styles.returnLabel}>Already have an account? </Text>
                    <Text onPress={() => navigation.navigate("Login")} style={styles.returnLink}>Sign in</Text>
                </View>
                <View style={styles.returnLinkContainer}>
                    <Text onPress={() => navigation.navigate("Main")} style={styles.returnLink}>Return to Home</Text>
                </View>

            </View>
        </GradientContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: QATAR_HEAVY,
        color: SECONDARY_COLOR
    },
    inputContainer: {
        width: 300,
        marginBottom: 10,
        alignItems: "flex-start"
    },
    label: {
        fontFamily: QATAR_HEAVY,
        color: WHITE,
        fontSize: 10,
        textAlign: "left"
    },
    input: {
        width: 300,
        backgroundColor: WHITE,
        fontFamily: QATAR_HEAVY,
        padding: 5,
        color: "black",
        height: 50
    },
    option: {
        fontFamily: QATAR_HEAVY,
        color: "black"
    },
    button: {
        backgroundColor: SECONDARY_COLOR,
        width: 150,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 4,
        marginTop: 25,
        marginBottom: 50,
        marginLeft: "auto",
        marginRight: "auto"
    },
    textButton: {
        fontFamily: "Qatar2022-Heavy",
        color: "black",
        textAlign: "center"
    },
    returnLinkContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    returnLabel: {
        color: WHITE,
        textAlign: "center",
        fontFamily: QATAR_HEAVY
    },
    returnLink: {
        color: SECONDARY_COLOR,
        textAlign: "center",
        fontFamily: QATAR_HEAVY
    }
})