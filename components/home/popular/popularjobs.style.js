import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
    backgroundColor: COLORS.blackk,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 3,
    textAlign: 'center',
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },

  videoCard: {
    marginRight: 10, // Adjust the spacing between images
    borderWidth: 2, // Border width
    borderRadius:10,
    borderColor:COLORS.red,
    width: 220,
    height: 162,
    backgroundColor: COLORS.lightWhite,
  },

  videoDetailsContainer: {
    padding: 2, // Adjust the padding of the video details container
  },

  videoTitle: {
    fontFamily: FONT.bold, // Жирний шрифт
  },
  
  videoImage: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    width: 216, // Adjust the width as per your requirement
    height: 118, // Adjust the height as per your requirement
    resizeMode: 'cover',

  },
});

export default styles;
