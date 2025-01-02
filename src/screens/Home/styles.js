import { StyleSheet } from "react-native";
import { SIZES  , COLORS  } from "../../constans";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor:COLORS.white,
    },
    innerContainer: {
        backgroundColor:COLORS.white,
        width: SIZES.width,
    },
    mapContainer: {
        height: SIZES.height * 0.65,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchContainer: {
        padding: 15,
        height: SIZES.height * 0.35,
    },
    searchInnerContainer: {
        backgroundColor: "#EEEEEE",
        borderRadius: SIZES.width * 0.05,
        height: SIZES.height * 0.32,
    },
});

export default  styles;