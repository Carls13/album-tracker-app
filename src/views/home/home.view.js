import { StyleSheet, Text, Image } from "react-native"
import { WHITE } from "../../infrastructure/theme/colors";
import { GradientContainer } from "../../infrastructure/theme/linearGradient.container";

export const HomeView = () => {
    return (
        <GradientContainer>
            {/* <Image source={{
                    uri: 'https://www.citypng.com/public/uploads/preview/qatar-2022-fifa-world-cup-logo-hd-png-11649451618xooi1vfwgs.png',
                    width: 100,
                    height: 100
                }} /> */}
            <Text style={styles.title}>FIFA WORLD CUP QATAR 2022</Text>
        </GradientContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontFamily: "Qatar2022-Bold",
        color: WHITE
    },
})