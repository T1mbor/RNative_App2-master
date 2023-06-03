import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

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
    color: COLORS.black,
    backgroundColor: COLORS.gray2,
    borderColor: COLORS.black,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
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
  },

  videoImage: {
    borderColor: COLORS.green,
    borderRadius: 4,
    width: 200, // Adjust the width as per your requirement
    height: 110, // Adjust the height as per your requirement
    resizeMode: 'cover',
    borderWidth: 1.7, // Border width
    borderColor: COLORS.green, // Border color
  },
});

export default styles;
