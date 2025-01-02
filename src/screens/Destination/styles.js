import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constans";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,

    },
    mainContainer: {
        width: SIZES.width * 0.94,
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        marginTop: SIZES.height * 0.03,

    },

    routePoints: {
        flexDirection: 'row',
        marginBottom: SIZES.height * 0.02,

    },
    routeLine: {
        width: 28,
        alignItems: 'center',
        color: COLORS.gray1


    },
    greenDot: {
        width: SIZES.width * 0.02,
        height: SIZES.width * 0.02,
        backgroundColor: COLORS.green,
        borderRadius: SIZES.width * 0.01,
    },
    redDot: {
        width: SIZES.width * 0.02,
        height: SIZES.width * 0.02,
        backgroundColor: 'red',
        borderRadius: SIZES.width * 0.01,

    },
    verticalLine: {
        width: SIZES.width * 0.003,
        height: SIZES.height * 0.07,
        backgroundColor: COLORS.gray1,
        marginVertical: SIZES.height * 0.02,

    },

    currentLocationText: {
        fontSize: SIZES.width * 0.035,
        color: COLORS.black,
        backgroundColor: COLORS.gray10,
        paddingVertical: SIZES.height * 0.02,
        borderRadius: 8,

        elevation: 3,
        paddingHorizontal: SIZES.width * 0.02,
        marginBottom: SIZES.height * 0.013,
        fontFamily: FONTS.medium,
        width: SIZES.width * 0.85

    },
    map: {
        flex: 1,
    },
    locateButton: {
        position: 'absolute',
        bottom: SIZES.height * 0.03,
        left: SIZES.width * 0.05,
        right: SIZES.width * 0.05,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: SIZES.width * 0.035,
        borderRadius: 8,
        elevation: 5,
    },
    locateButtonText: {
        fontSize: SIZES.width * 0.035,

        color: 'black',
        fontFamily: FONTS.medium,
    },
});



export default styles